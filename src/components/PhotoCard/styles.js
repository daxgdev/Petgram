import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 0;
  display: block;
  position: relative;
  padding: 56.25% 0 0 0;
`;

export const Img = styled.img`
  ${fadeIn({ time: "0.5s" })}
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;
