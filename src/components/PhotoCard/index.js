import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMutationToggleLike } from "../../hooks/useMutationToggleLike";
import { FavButton } from "../FavButton";
import { Img, ImgWrapper, Article } from "./styles";

const DEFAULT_IMAGE =
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65761296352685.5eac4787a4720.jpg";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const [show, element] = useNearScreen();
  const { mutation } = useMutationToggleLike();

  const handleFavClick = () => {
    if (!isAuth) return navigate("/register");
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <NavLink to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </NavLink>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
