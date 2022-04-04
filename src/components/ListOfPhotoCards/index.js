import React from "react";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { List, Item } from "./styles";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) return `Error! ${error.message}`;

  return (
    <List>
      {loading ? (
        <Item key={loading}>
          <PhotoCard />
        </Item>
      ) : (
        data.photos.map((photo) => (
          <Item key={photo.id}>
            <PhotoCard {...photo} />
          </Item>
        ))
      )}
    </List>
  );
};
