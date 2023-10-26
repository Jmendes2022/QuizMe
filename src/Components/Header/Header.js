import React from "react";
import GraduationCap from "../Images/GraduationCap.png";

import '../Header/Header.css';

const Header = () => {
  return (
    <>
      <header className="app-header">
        <span>Quiz</span>
        <span>
          Me <img className="graduation-cap" src={GraduationCap} />
        </span>
      </header>
    </>
  );
};

export default Header;
