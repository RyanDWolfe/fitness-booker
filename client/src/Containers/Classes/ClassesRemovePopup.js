import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import "../../App.css";
import { removeClass } from "../../Actions/actions";

class ClassesRemovePopup extends React.Component {
  state = { open: false, studio_class: { id: "" } };

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
    this.props.removeClass(this.state.studio_class.id);
  };

  render() {
    return (
      <div>
        <button className="remove" onClick={this.openModal}>
          Remove Class
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
              <h2>Remove Class</h2>
              <label>Name: </label>
              <div className="studioSelect">
                <select name="id" onChange={this.handleChange}>
                  {this.props.classes.map(studio_class => {
                    return (
                      <option
                        key={studio_class.id.toString()}
                        value={studio_class.id}
                      >
                        {" "}
                        {studio_class.name}{" "}
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

export default connect(state => ({ classes: state.classes.all }), {
  removeClass
})(ClassesRemovePopup);
