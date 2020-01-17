import React from "react";
import ReservationsRemovePopup from "../Containers/Reservations/ReservationsRemovePopup";

const ReservationCards = ({ studios, classes, reservations }) => {
  const studiosDictionary = studios.reduce((map, studio) => {
    map[studio.id] = studio;
    return map;
  }, {});

  const classesDictionary = classes.reduce((map, studio_class) => {
    map[studio_class.id] = studio_class;
    return map;
  }, {});

  return reservations.map(reservation => {
    const matchingStudio = studiosDictionary[reservation.studio_id];
    const matchingClass = classesDictionary[reservation.studio_class_id];
    let reservation_status;
    if (reservation.status === 1) {
      reservation_status = "Active";
    } else {
      reservation_status = "Canceled";
    }
    return (
      <li key={reservation.id.toString()}>
        <div className="reservationCard">
          <h1>Status: {reservation_status}</h1>
          <h3>Class: {matchingClass.name}</h3>
          <h3>Studio: {matchingStudio.name}</h3>
          {<ReservationsRemovePopup id={reservation.id} />}
        </div>
      </li>
    );
  });
};

export default ReservationCards;
