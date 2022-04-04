import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../hooks/useRegisterMutation";
import { useLoginMutation } from "../hooks/useLoginMutation";
import { HelmetLayout } from "../components/HelmetLayout";
import { AppContext } from "../AppContext";
import { UserForm } from "../components/UserForm";
import { PageTitle } from "../components/PageTitle";

const RegisterPage = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  const { activateAuth } = useContext(AppContext);

  const {
    registerMutation,
    loading: loadingRegister,
    error: errorRegister,
  } = useRegisterMutation();

  const {
    loginMutation,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then((response) => {
      const { register } = response.data;
      console.log(register);
      activateAuth(register);
      setSuccessMsg("Usuario registrado con éxito");
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    loginMutation({ variables: variable }).then((response) => {
      const { login } = response.data;
      console.log(login);
      activateAuth(login);
      navigate("/");
    });
  };

  const registerErrorMsg =
    errorRegister && "El usuario ya existe o hay algún problema :(";
  const loginErrorMsg = errorLogin && "Credenciales invalidas";

  return (
    <HelmetLayout
      title="Regístrate"
      description="En esta sección podrás registrarte e iniciar sesión. Animate, ¡no cuesta nada!"
    >
      <PageTitle content="¡Regístrate para disfrutar de todo nuestro contenido!" />
      <UserForm
        error={registerErrorMsg}
        loading={loadingRegister}
        success={successMsg}
        onSubmit={onSubmitRegister}
        title="Regístrate"
      />
      <UserForm
        error={loginErrorMsg}
        loading={loadingLogin}
        onSubmit={onSubmitLogin}
        title="Iniciar Sesión"
      />
    </HelmetLayout>
  );
};

const Register = React.memo(RegisterPage);

export default Register;
