import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { addClass } from "../../Actions/actions";

class ClassesAddPopup extends React.Component {
  state = {
    open: false,
    studio_class: {
      name: "",
      class_type: "",
      description: "",
      occupancy: "",
      studio_id: ""
    }
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      studio_class: {
        ...this.state.studio_class,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    this.props.addClass(this.state.studio_class);
  };

  render() {
    return (
      <div>
        <button className="add" onClick={this.openModal}>
          Add Class
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
              <h2>Add Class</h2>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={this.state.studio_class.name}
                onChange={this.handleChange}
              />
              <div>
                <label>Studio: </label>
                <select
                  name="studio_id"
                  className="studioSelect"
                  onChange={this.handleChange}
                >
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
              <label>Type: </label>
              <input
                type="text"
                name="class_type"
                value={this.state.studio_class.class_type}
                onChange={this.handleChange}
              />
              <label>Description: </label>
              <input
                type="text"
                name="description"
                value={this.state.studio_class.description}
                onChange={this.handleChange}
              />
              <label>Occupancy: </label>
              <input
                type="text"
                name="occupancy"
                value={this.state.studio_class.occupancy}
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

export default connect(state => ({ studios: state.studios.all }), { addClass })(
  ClassesAddPopup
);
