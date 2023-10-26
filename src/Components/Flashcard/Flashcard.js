import React from 'react'

const Flashcard = ({className, children, title, answer}) => {
  return (
    <div className={`flashcard ${className}`}>
      <h2 className="flashcard-title">{title}</h2>
      <div className="flashcard-content">
        <p>
          <strong>Question:</strong>
        </p>
        <p>{children}</p>
      </div>
      <div className="flashcard-answer">
        <p>
          <strong>Answer:</strong>
        </p>
              <p>{answer}</p>
          </div>
    </div>
  );
}

export default Flashcard