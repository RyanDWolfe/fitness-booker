import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { addStudio } from "../../Actions/actions";

class StudiosAddPopup extends React.Component {
  state = {
    open: false,
    studio: { name: "", class_type: "", description: "", address: "" }
  };

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
    this.props.addStudio(this.state.studio);
  };

  render() {
    return (
      <div>
        <button className="add" onClick={this.openModal}>
          Add Studio
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
              <h2>Add Studio</h2>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={this.state.studio.name}
                onChange={this.handleChange}
              />
              <label>type: </label>
              <input
                type="text"
                name="class_type"
                value={this.state.studio.class_type}
                onChange={this.handleChange}
              />
              <label>Description: </label>
              <input
                type="text"
                name="description"
                value={this.state.studio.description}
                onChange={this.handleChange}
              />
              <label>Address: </label>
              <input
                type="text"
                name="address"
                value={this.state.studio.address}
                onChange={this.handleChange}
              />
              <input className="submit" type="submit" />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default connect(null, { addStudio })(StudiosAddPopup);
