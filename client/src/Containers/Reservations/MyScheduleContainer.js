import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudios, getClasses, getReservations } from "../../Actions/actions";
import ReservationCards from "../../components/ReservationCards";

class MyScheduleContainer extends Component {
  async componentDidMount() {
    const promises = [];
    promises.push(this.props.getStudios());
    promises.push(this.props.getClasses());
    promises.push(this.props.getReservations());
    await Promise.all(promises);
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <h3>Reservations:</h3>
          <ul id="reservationList">
            <ReservationCards
              studios={this.props.studios}
              classes={this.props.classes}
              reservations={this.props.reservations}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    studios: state.studios.all,
    classes: state.classes.all,
    reservations: state.reservations.all
  }),
  {
    getStudios,
    getClasses,
    getReservations
  }
)(MyScheduleContainer);
