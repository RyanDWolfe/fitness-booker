import React, { Component } from "react";
const StudioCards = ({ studios }) => {
  return studios.map(studio => {
    return (
      <li>
        <div className="studioCard">
          <h1>{studio.name}</h1>
          <h3>{studio.class_type}</h3>
          <p>{studio.description}</p>
          <p>{studio.address}</p>
        </div>
      </li>
    );
  });
};

export default StudioCards;
