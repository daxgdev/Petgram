import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HelmetLayout } from "../components/HelmetLayout";
import { AppContext } from "../AppContext";
import { SubmitButton } from "../components/SubmitButton";
import { PageTitle } from "../components/PageTitle";

const User = () => {
  const { removeAuth } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRemoveAuth = () => {
    removeAuth();
    navigate("/");
  };

  return (
    <HelmetLayout title="User" description="Gestiona tu cuenta y cierra sesión">
      <PageTitle content="User" />
      <SubmitButton onClick={handleRemoveAuth}>Cerrar sesión</SubmitButton>
    </HelmetLayout>
  );
};

export default User;
