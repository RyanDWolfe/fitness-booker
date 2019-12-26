import React from "react";
import ClassesRemovePopup from "../Containers/Classes/ClassesRemovePopup";

const ClassCards = ({ classes, studios }) => {
  const studioList = studios;
  // studioList has the studios in an array of objects
  // debugger;
  // console.log(studioList);
  return classes.map(card => {
    return (
      <li key={card.id.toString()}>
        <div className="classCard">
          <div>
            {" "}
            <h1>{card.name}</h1>
            {/* <h3>Studio Name: {studioList.findbyid(card.studio_id).name}</h3> */}
            {/* I just don't know how to grab the right object that matches the id form the class */}
            <h3>Studio: {card.studio_id}</h3>
            <h3>Type: {card.class_type}</h3>
            <p>{card.description}</p>
            <p>
              <strong>Occupancy: </strong>
              {card.occupancy}
            </p>
          </div>
          <div>
            <ClassesRemovePopup id={card.id} />
            <button className="reserve">Reserve</button>
          </div>
        </div>
      </li>
    );
  });
};

export default ClassCards;
