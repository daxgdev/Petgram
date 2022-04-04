import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./AppContext.js";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { App } from "./App.jsx";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location = "/";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-daxter-ivf8j1no5-daxtergd.vercel.app/graphql",
    }),
  ]),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
