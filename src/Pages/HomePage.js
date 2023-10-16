import React from "react";
import Card from "../Components/Card";

const HomePage = () => {
  return (
    <>
      <div>
        <h2 className="text-center mt-5">Welcome, (user)!</h2>
        <section className="home-grid mt-5">
          <Card title={"Let's Study!"}>View your flashcards or make new ones!</Card>
          <Card title={"Quiz Me!"}>Quiz yourself based on all your flashcard collection!</Card>
          <Card title={"Statistics"}>See your current statistics!</Card>
          <Card title={"Account"}>Edit your Account settings</Card>
        </section>
      </div>
    </>
  );
};

export default HomePage;
