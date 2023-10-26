import React from "react";

import '../Card/Card.css';

const Card = ({title, children, buttonChild=false}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <section>{children}</section>
      {buttonChild && <button className="btn btn-card">Go</button>}
    </div>
  );
};

export default Card;
