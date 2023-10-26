import React from "react";
import LoginForm from "../../LoginForm/LoginForm";

const LoginPage = ({dispatch}) => {
  return (
    <>
      <LoginForm dispatch={dispatch} />
    </>
  );
};

export default LoginPage;
