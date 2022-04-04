import React from "react";
import { Nav, NavLink } from "./styles";
import { MdHome, MdPersonOutline, MdFavoriteBorder } from "react-icons/md";

export const NavBar = () => {
  const SIZE = "32px";

  return (
    <Nav>
      <NavLink to="/">
        <MdHome size={SIZE} />
      </NavLink>
      <NavLink to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </NavLink>
      <NavLink to="/user">
        <MdPersonOutline size={SIZE} />
      </NavLink>
    </Nav>
  );
};
