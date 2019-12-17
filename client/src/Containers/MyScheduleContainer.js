import React, { Component } from "react";
import ReservationCards from "../components/ReservationCards";
import APICalls from "../components/APICalls";

class MyScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    };
  }

  async getReservations() {
    try {
      const response = await fetch("http://localhost:3001/api/v1/reservations");
      const data = await response.json();
      console.log(data);
      this.setState({ reservations: data });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    await this.getReservations();
    // {
    //   this.getStudios();
    // }
    // <APICalls />;
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <h3>Reservations:</h3>
          <ul id="reservationList">
            <ReservationCards reservations={this.state.reservations} />
          </ul>
        </div>
      </div>
    );
  }
}

export default MyScheduleContainer;
