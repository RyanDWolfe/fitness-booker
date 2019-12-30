import React from "react";
import ReservationsRemovePopup from "../Containers/Reservations/ReservationsRemovePopup";

const ReservationCards = ({ reservations }) => {
  return reservations.map(reservation => {
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
          <h3>Class: {reservation.studio_class_id}</h3>
          <h3>Studio: {reservation.studio_id}</h3>
          <ReservationsRemovePopup id={reservation.id} />
        </div>
      </li>
    );
  });
};

export default ReservationCards;
