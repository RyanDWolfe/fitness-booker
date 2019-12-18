import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { addStudio } from "../../Actions/actions";

class StudiosAddPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, studio: {} }; // not sure if I need to add it here
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  handleChange(event) {
    this.setState({ name: event.target.name }); // not working
  }

  handleSubmit = event => {
    //not sure I need this function
    event.preventDefault();
    this.setState({ studio: event.target.name });
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
                value={this.state.value}
                onChange={this.handleChange}
              />
              <label>type: </label>
              <input type="text" />
              <label>Description: </label>
              <input type="text" />
              <label>Address: </label>
              <input type="text" />
              <input
                className="submit"
                type="submit"
                // onClick={() => this.props.addStudio(FormData)}
              />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default connect(null, { addStudio })(StudiosAddPopup);
