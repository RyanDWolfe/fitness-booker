import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { addReservation } from "../../Actions/actions";
import ClassCards from "../../components/ClassCards";

class ReservationsAddPopup extends React.Component {
  state = {
    open: false
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    this.props.addReservation(this.reservation);
  };

  reservation = {
    status: "1",
    user_id: "1",
    studio_id: this.props.studio_class.studio_id,
    studio_class_id: this.props.studio_class.id
  };

  render() {
    return (
      <div>
        <button className="reserve" onClick={this.openModal}>
          Reserve
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
              <h2>Are you sure you want to book this class?</h2>

              <input className="submit" type="submit" />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default connect(null, { addReservation })(ReservationsAddPopup);
