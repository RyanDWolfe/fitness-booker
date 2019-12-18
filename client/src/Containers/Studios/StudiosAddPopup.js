import React from "react";
import Popup from "reactjs-popup";
import "../../App.css";

class StudiosAddPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

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
            <form>
              <h2>Add Studio</h2>
              <label>Name: </label>
              <input className="textField" type="text" />
              <label>type: </label>
              <input type="text" />
              <label>Description: </label>
              <input type="text" />
              <label>Address: </label>
              <input type="text" />
              <input className="submit" type="submit" />
            </form>
          </div>
        </Popup>
      </div>
    );
  }
}

export default StudiosAddPopup;
