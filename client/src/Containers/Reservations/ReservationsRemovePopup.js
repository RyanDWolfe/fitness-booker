import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { cancelReservation } from "../../Actions/actions";

class ReservationsRemovePopup extends React.Component {
  state = { open: false };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    this.props.cancelReservation(this.props.id);
  };

  render() {
    return (
      <div>
        <button className="remove" onClick={this.openModal}>
          Cancel Reservation
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <button className="close" onClick={this.closeModal}>
              &times;
            </button>
            <form onSubmit={event => this.handleSubmit(event)}>
              <h2>Are you sure you want to cancel this Class?</h2>
              <input className="submit" type="submit" />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default connect(null, {
  cancelReservation
})(ReservationsRemovePopup);
