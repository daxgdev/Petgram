import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import { fadeIn } from "../../styles/animation";

export const NavLink = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  ${fadeIn({ time: "0.5s" })}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  width: 75px;
  height: 75px;
`;
