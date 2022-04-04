import React from "react";
import { useParams } from "react-router-dom";
import { HelmetLayout } from "../components/HelmetLayout";
import { List, Item } from "../components/ListOfPhotoCards/styles";
import { PageTitle } from "../components/PageTitle";
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery";

const Detail = () => {
  const params = useParams();
  return (
    <HelmetLayout title={`Fotografía ${params.id}`}>
      <PageTitle content="Detalle" />
      <List>
        <Item>
          <PhotoCardWithQuery id={params.id} />
        </Item>
      </List>
    </HelmetLayout>
  );
};

export default Detail;
