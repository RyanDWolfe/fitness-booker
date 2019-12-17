import React, { Component } from "react";
import ClassCards from "../components/ClassCards";
import APICalls from "../components/APICalls";

class ClassesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    };
  }

  async getClasses() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/studio_classes"
      );
      const data = await response.json();
      console.log(data);
      this.setState({ classes: data });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    await this.getClasses();
    // {
    //   this.getStudios();
    // }
    // <APICalls />;
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
          <h3>Classes:</h3>
          <ul id="classList">
            <ClassCards classes={this.state.classes} />
          </ul>
        </div>
      </div>
    );
  }
}

export default ClassesContainer;
