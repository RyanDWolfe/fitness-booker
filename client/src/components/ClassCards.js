import React from "react";
import ClassesRemovePopup from "../Containers/Classes/ClassesRemovePopup";
import ReservationsAddPopup from "../Containers/Reservations/ReservationsAddPopup";

const ClassCards = ({ classes, studios }) => {
  // let result;
  // let result2 = studios.find(({ id }) => id === 3);
  // result corectly grabs the object and result.name works
  // let result3 = studios.filter(studio => studio.id === classes[0].id);
  // result3[0].name returns the name of the studio

  // debugger;

  return classes.map(card => {
    // debugger;
    //map does not have access to studios
    return (
      <li key={card.id.toString()}>
        <div className="classCard">
          <div>
            {" "}
            <h1>{card.name}</h1>
            {/* <h3>{(result = studios.find(({ id }) => id === card.id))}</h3> */}
            {/* <h3>Studio Name: {result.name}</h3> */}
            <h3>Studio: {card.studio_id}</h3>
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
