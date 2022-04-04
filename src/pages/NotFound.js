import React from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { HelmetLayout } from "../components/HelmetLayout";

const NotFound = () => {
  return (
    <HelmetLayout title="Error 404">
      <PageTitle content="Página no encontrada 😥" />
      <Link to="/">Return to home</Link>
    </HelmetLayout>
  );
};

export default NotFound;
