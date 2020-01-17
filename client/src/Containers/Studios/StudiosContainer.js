import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudios } from "../../Actions/actions";
import StudioCards from "../../components/StudioCards";
import StudiosAddPopup from "./StudiosAddPopup";

class StudiosContainer extends Component {
  async componentDidMount() {
    this.props.getStudios();
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <div className="inputContainer"></div>
          <div>
            <StudiosAddPopup />
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
