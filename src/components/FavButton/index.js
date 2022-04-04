import React from "react";
import { LikedIcon, Button } from "./styles";
import { GrFavorite } from "react-icons/gr";

export const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button onClick={onClick}>
      {liked ? <LikedIcon size="32px" /> : <GrFavorite size="32px" />}
      {likes} likes!
    </Button>
  );
};
