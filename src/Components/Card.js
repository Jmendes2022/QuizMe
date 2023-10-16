import React from "react";

const Card = ({title, children}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <section>{children}</section>
    </div>
  );
};

export default Card;
