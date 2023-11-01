import React, { useState } from 'react'
import Button from "../Button/Button";


const Flashcard = ({ className, title, answer, cardContent}) => {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() { 
    setIsEditing(true);
  }

  const handleSave = () => { 
    //API Call to save flashcard
    setIsEditing(false);
  }

  return (
    <div className={`flashcard ${className}`}>
      {isEditing === false ? <h2 className="flashcard-title">{title}</h2> :  <input className="flashcard-title flashcard-edit" placeholder={title} />}
      <div className="flashcard-content">
        <p>
          <strong>Question:</strong>
        </p>
        {isEditing === false ? <p>
            {cardContent}
            <Button className="btn btn-flashcard-edit" onClick={handleEdit}>Edit</Button>
          </p> : <input placeholder={cardContent} className="flashcard-edit" />}
      </div>
      <div className="flashcard-answer">
        <p>
          <strong>Answer:</strong>
        </p>
        {isEditing === false ? <p>{answer}</p> : (
          <>
            <textarea placeholder={answer} className="flashcard-edit" />
            <Button
              className="btn btn-flashcard-save"
              onClick={handleSave}
            >
              Save
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Flashcard