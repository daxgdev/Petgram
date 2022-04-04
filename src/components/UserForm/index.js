import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, ButtonLoading, Title, Message } from "./styles";

const UserFormComponent = ({ onSubmit, title, error, loading, success }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        {error && <Message type="error">{error}</Message>}
        {success && <Message type="success">{success}</Message>}
        <Title>{title}</Title>
        <Input
          disabled={loading}
          type="email"
          placeholder="est@example.com"
          {...email}
        />
        <Input
          disabled={loading}
          type="password"
          placeholder="Password"
          {...password}
        />
        {loading ? (
          <ButtonLoading disabled={loading}>...</ButtonLoading>
        ) : (
          <Button>{title}</Button>
        )}
      </Form>
    </>
  );
};

export const UserForm = React.memo(UserFormComponent);
