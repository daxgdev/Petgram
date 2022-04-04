import React from "react";
import { HelmetLayout } from "../components/HelmetLayout";
import { ListOfFavs } from "../components/ListOfFavs";
import { PageTitle } from "../components/PageTitle";

const Favs = () => {
  return (
    <HelmetLayout title="Tus favoritos" description="Aquí verás tus favoritos">
      <PageTitle content="Favoritos" />
      <ListOfFavs />
    </HelmetLayout>
  );
};

export default Favs;
