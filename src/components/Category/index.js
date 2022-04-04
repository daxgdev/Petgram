import React from "react";
import { NavLink, Image } from "./styles";

const DEFAULT_IMAGE = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65761296352685.5eac4787a4720.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path,
  emoji = "?",
  name,
}) => (
  <NavLink to={`/pet/${path}`}>
    <Image src={cover} alt={name} />
    {emoji}
  </NavLink>
);
