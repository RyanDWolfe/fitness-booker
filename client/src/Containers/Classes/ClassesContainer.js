import React, { Component } from "react";
import { connect } from "react-redux";
import { getClasses, getStudios } from "../../Actions/actions";
import ClassCards from "../../components/ClassCards";
import ClassesAddPopup from "./ClassesAddPopup";

class ClassesContainer extends Component {
  async componentDidMount() {
    const promises = [];
    promises.push(this.props.getStudios());
    promises.push(this.props.getClasses());
    await Promise.all(promises);
  }

  render() {
    return (
      <div>
        <div className="listWrapper">
          <div className="inputContainer"></div>
          <div>
            <ClassesAddPopup />
          </div>
          <h3>Classes:</h3>
          <ul id="classList">
            <ClassCards
              classes={this.props.classes}
              studios={this.props.studios}
            />
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
