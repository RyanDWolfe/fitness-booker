import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudios, addStudio, removeStudio } from "../../Actions/actions";
import StudioCards from "../../components/StudioCards";
import StudiosAddPopup from "./StudiosAddPopup";
import StudiosRemovePopup from "./StudiosRemovePopup";

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
            <StudiosAddPopup />
            <button className="add" onClick={() => this.props.addStudio()}>
              Add Studio OLD
            </button>
            <StudiosRemovePopup />
            <button
              className="remove"
              onClick={() => this.props.removeStudio()}
            >
              Remove Studio OLD
            </button>
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
  getStudios,
  addStudio,
  removeStudio
})(StudiosContainer);
