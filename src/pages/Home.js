import React from "react";
import { HelmetLayout } from "../components/HelmetLayout";
import { useParams } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";

const HomePage = () => {
  const params = useParams();

  return (
    <HelmetLayout
      title="Home"
      description="Aquí encontrarás fotos de tus mascotas favoritas"
    >
      <ListOfCategories />
      <PageTitle content="Fotos" />
      <ListOfPhotoCards categoryId={params.id} />
    </HelmetLayout>
  );
};

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId == props.categoryId;
});

export default Home;
