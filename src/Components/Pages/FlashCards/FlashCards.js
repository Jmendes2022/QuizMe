import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';
import FlashCard from '../../Flashcard/Flashcard';

import '../../Flashcard/Flashcard.css';
import "../FlashCards/FlashCards.css";

const title = 'C#';
const cardContent = 'What does OOP stand for?';
const answer = 'Object Oriented Programming';

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
        <FlashCard title={title} answer={answer} className="">
          <Button className='btn btn-flashcard-edit'>Edit</Button>
          {cardContent}
        </FlashCard>
      </div>
    </section>
  );
}

export default FlashCards