import React from "react";
import { useGetFavorites } from "../../hooks/useGetFavorites";
import { NavLink, Grid, Image, Placeholer } from "./styles";

const DEFAULT_IMAGE =
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65761296352685.5eac4787a4720.jpg";

export const ListOfFavs = () => {
  const { data, loading, error } = useGetFavorites();

  if (error) return `Error! ${error.message}`;

  return (
    <Grid>
      {loading ? (
        <Placeholer key={loading}>
          <Image src={DEFAULT_IMAGE} />
        </Placeholer>
      ) : (
        data.favs.map((fav) => (
          <NavLink key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </NavLink>
        ))
      )}
    </Grid>
  );
};
