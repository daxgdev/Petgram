import React, { useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppContext } from "./AppContext";
import { GlobalStyles } from "./styles/globalStyles";
import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";

const Detail = React.lazy(() => import("./pages/Detail"));
const Favs = React.lazy(() => import("./pages/Favs"));
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Register = React.lazy(() => import("./pages/Register"));
const User = React.lazy(() => import("./pages/User"));

export const App = () => {
  const { isAuth } = useContext(AppContext);

  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <GlobalStyles />
        <Logo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/favs"
            element={isAuth ? <Favs /> : <Navigate replace to="/register" />}
          />
          <Route
            exact
            path="/user"
            element={isAuth ? <User /> : <Navigate replace to="/register" />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/pet/:id"
            element={isAuth ? <Home /> : <Navigate replace to="/register" />}
          />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </Router>
    </Suspense>
  );
};
