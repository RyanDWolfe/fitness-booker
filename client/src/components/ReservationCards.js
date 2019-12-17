import React from "react";
const ReservationCards = ({ reservations }) => {
  return reservations.map(reservation => {
    return (
      <li key={reservation.id.toString()}>
        <div className="reservationCard">
          <h1>{reservation.status}</h1>
          <h3>Class: {reservation.class_id}</h3>
          <h3>Studio: {reservation.studio_id}</h3>
        </div>
      </li>
    );
  });
};

export default ReservationCards;
