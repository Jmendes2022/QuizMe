import React from "react";
import Card from "../Card/Card";
import { Link } from 'react-router-dom';
import Button from "../Button/Button";

import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <h2 className="text-center mt-5">Welcome, (user)!</h2>
        <Button className="btn btn-logout">Log out</Button>
        <section className="home-grid mt-5">
          <Link to="/flashcards">
            <Card title={"Study!"} buttonChild={true}>
              View your flashcards or make new ones!
            </Card>
          </Link>
          <Link to="/quiz">
            <Card title={"Quiz Me!"} buttonChild={true}>
              Quiz yourself based on your flashcards!
            </Card>
          </Link>
          <Link to="/statistics">
            <Card title={"Statistics"} buttonChild={true}>
              See your current statistics!
            </Card>
          </Link>
          <Link to="/account">
            <Card title={"Account"} buttonChild={true}>
              Edit your Account settings
            </Card>
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomePage;
