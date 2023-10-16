import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";

const Main = ({dispatch}) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage dispatch={dispatch} />} />
      <Route path="/Home" element={<HomePage />} />
    </Routes>
  );
};

export default Main;
