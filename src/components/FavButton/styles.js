import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { fadeIn } from "../../styles/animation";

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`;

export const LikedIcon = styled(MdFavorite)`
  color: #ff277a;
  ${fadeIn({ time: ".2s" })}
`;
