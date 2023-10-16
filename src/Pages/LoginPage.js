import React from "react";
import LoginForm from "../Components/LoginForm";

const LoginPage = ({dispatch}) => {
  return (
    <>
      <LoginForm dispatch={dispatch} />
    </>
  );
};

export default LoginPage;
