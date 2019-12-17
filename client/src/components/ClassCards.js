import React from "react";
const ClassCards = ({ classes }) => {
  return classes.map(card => {
    return (
      <li key={card.id.toString()}>
        <div className="classCard">
          <h1>{card.name}</h1>
          <h3>Studio: {card.studio_id}</h3>
          <h3>Type: {card.class_type}</h3>
          <p>{card.description}</p>
          <p>
            <strong>Occupancy: </strong>
            {card.occupancy}
          </p>
        </div>
      </li>
    );
  });
};

export default ClassCards;
