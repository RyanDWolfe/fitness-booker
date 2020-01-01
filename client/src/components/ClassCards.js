import React from "react";
import ClassesRemovePopup from "../Containers/Classes/ClassesRemovePopup";
import ReservationsAddPopup from "../Containers/Reservations/ReservationsAddPopup";

const ClassCards = ({ classes, studios }) => {
  const studiosDictionary = studios.reduce((map, studio) => {
    map[studio.id] = studio;
    return map;
  }, {});

  return classes.map(card => {
    const matchingStudio = studiosDictionary[card.studio_id];
    return (
      <li key={card.id.toString()}>
        <div className="classCard">
          <div>
            {" "}
            <h1>{card.name}</h1>
            <h3>Studio: {matchingStudio.name}</h3>
            <h3>Type: {card.class_type}</h3>
            <p>{card.description}</p>
            <p>
              <strong>Occupancy: </strong>
              {card.occupancy}
            </p>
          </div>
          <div>
            <div align="right">
              <ClassesRemovePopup id={card.id} />
            </div>
            <ReservationsAddPopup studio_class={card} />
          </div>
        </div>
      </li>
    );
  });
};

export default ClassCards;
