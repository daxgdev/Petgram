import React, { createContext, useState } from "react";
import { useApolloClient } from "@apollo/client";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const client = useApolloClient();

  const [isAuth, setIsAuth] = useState(() => {
    return sessionStorage.getItem("token");
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      sessionStorage.setItem("token", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
      client.resetStore();
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
