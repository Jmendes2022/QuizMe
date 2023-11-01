import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FlashCard from '../../Flashcard/Flashcard';
import Button from '../../Button/Button';

import '../../Flashcard/Flashcard.css';
import "../FlashCards/FlashCards.css";

let title = 'C#';
let cardContent = 'What does OOP stand for?';
let answer = 'Object Oriented Programming';

const FlashCards = () => {

  return (
    <section className="flashcard-container">
      <h1 className="flashcard-header">Study</h1>
      <div className="mt-5 btn-container">
        <Link to="/home">
          <Button className="btn btn-create-cards">Home</Button>
        </Link>
        <Button className="btn btn-create-cards">Create Cards</Button>
      </div>
      <div className="card-container">
        <FlashCard title={title} answer={answer} cardContent={cardContent} className=""/>
      </div>
    </section>
  );
}

export default FlashCards