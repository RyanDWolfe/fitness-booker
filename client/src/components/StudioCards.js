import React from "react";
const StudioCards = ({ studios }) => {
  return studios.map(studio => {
    return (
      <li key={studio.id.toString()}>
        <div className="studioCard">
          <h1>{studio.name}</h1>
          <h3>Type: {studio.class_type}</h3>
          <p>{studio.description}</p>
          <p>
            <strong>Address: </strong>
            {studio.address}
          </p>
          <h3>Available Classes: 4</h3> {/*make dynamic*/}
        </div>
      </li>
    );
  });
};

export default StudioCards;
