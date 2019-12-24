import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudios } from "../../Actions/actions";
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
            <StudiosRemovePopup />
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
