import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { removeStudio } from "../../Actions/actions";

class StudiosRemovePopup extends React.Component {
  state = { open: false, studio: { id: "" } };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      studio: { ...this.state.studio, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = event => {
    this.props.removeStudio(this.state.studio.id);
  };

  render() {
    return (
      <div>
        <button className="remove" onClick={this.openModal}>
          Remove Studio
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
              <h2>Remove Studio</h2>
              <label>Name: </label>
              <div className="studioSelect">
                <select name="id" onChange={this.handleChange}>
                  {this.props.studios.map(studio => {
                    return (
                      <option key={studio.id.toString()} value={studio.id}>
                        {" "}
                        {studio.name}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input className="submit" type="submit" />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default connect(state => ({ studios: state.studios.all }), {
  removeStudio
})(StudiosRemovePopup);
