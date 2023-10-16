import {React, useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`menu-toggle ${isMenuOpen ? "open" : ""} mobile-nav`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "active" : ""} mobile-nav`}>
        <span onClick={toggleMenu}>❌</span>
        <ul>
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>
          <li>
            <Link to={"/QuizMe"}>Quiz Me!</Link>
          </li>
          <li>
            <Link to={"/Study"}>Study</Link>
          </li>
          <li>
            <Link to={"/Stats"}>Stats</Link>
          </li>
        </ul>
      </nav>
      <nav className="regular-nav">
        <button className="btn nav-btn">
          <Link to={"/Home"}>Home</Link>
        </button>
        <button className="btn nav-btn">
          <Link to={"/QuizMe"}>Quiz Me!</Link>
        </button>

        <button className="btn nav-btn">
          <Link to={"/Study"}>Study</Link>
        </button>

        <button className="btn nav-btn">
          <Link to={"/Stats"}>Stats</Link>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
