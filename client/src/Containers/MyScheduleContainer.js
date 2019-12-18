import React, { Component } from "react";
import { connect } from "react-redux";
import { getReservations } from "../Actions/actions";
import ReservationCards from "../components/ReservationCards";

class MyScheduleContainer extends Component {
  async componentDidMount() {
    this.props.getReservations();
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <h3>Reservations:</h3>
          <ul id="reservationList">
            <ReservationCards reservations={this.props.reservations} />
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ reservations: state.reservations.all }), {
  getReservations
})(MyScheduleContainer);
