import React from "react";
import { useGetSinglePhoto } from "../hooks/useGetSinglePhoto";
import { PhotoCard } from "../components/PhotoCard";

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id);
  if (error) return `Error! ${error.message}`;

  return <>{loading ? <PhotoCard /> : <PhotoCard {...data.photo} />}</>;
};
