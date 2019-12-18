import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { removeStudio } from "../../Actions/actions";

class StudiosRemovePopup extends React.Component {
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
                <select>
                  {this.props.studios.map(studio => {
                    return <option value={studio.id}> {studio.name} </option>;
                  })}
                </select>
              </div>

              <input
                className="submit"
                type="submit"
                // onClick={() => this.props.removeStudio(FormData)}
              />
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
