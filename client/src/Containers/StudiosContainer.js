import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudios } from "../Actions/actions";
import StudioCards from "../components/StudioCards";
import ControlledPopup from "./PopUp";

class StudiosContainer extends Component {
  async componentDidMount() {
    this.props.getStudios();
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <div className="inputContainer">
            <input
              className="studioInput"
              type="text"
              placeholder="search"
              maxLength="50"
            />
          </div>
          <div>
            <ControlledPopup />
            <button className="add" onClick={() => alert("clicked")}>
              Add Studio
            </button>
            <button className="remove">Remove Studio</button>
          </div>
          <h3>Studios:</h3>
          <ul id="studioList">
            <StudioCards studios={this.props.studios} />
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ studios: state.studios.all }), {
  getStudios
})(StudiosContainer);
