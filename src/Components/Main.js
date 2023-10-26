import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import FlashCards from "./Pages/FlashCards/FlashCards";

const Main = ({dispatch}) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage dispatch={dispatch} />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/flashcards" element={<FlashCards />} />
    </Routes>
  );
};

export default Main;
