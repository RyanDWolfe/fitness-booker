import React, { Component } from "react";
import { connect } from "react-redux";
import { getClasses, getStudios } from "../../Actions/actions";
import ClassCards from "../../components/ClassCards";
import ClassesAddPopup from "./ClassesAddPopup";
import ClassesRemovePopup from "./ClassesRemovePopup";

class ClassesContainer extends Component {
  async componentDidMount() {
    this.props.getClasses();
    this.props.getStudios();
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <div className="inputContainer">
            <input
              className="classInput"
              type="text"
              placeholder="search"
              maxLength="50"
            />
          </div>
          <div>
            <ClassesAddPopup />
            <ClassesRemovePopup />
          </div>
          <h3>Classes:</h3>
          <ul id="classList">
            <ClassCards classes={this.props.classes} />
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ studios: state.studios.all, classes: state.classes.all }),
  {
    getClasses,
    getStudios
  }
)(ClassesContainer);
