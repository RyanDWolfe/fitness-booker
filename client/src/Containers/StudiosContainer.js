import React, { Component } from "react";
import StudioCards from "../components/StudioCards";
import APICalls from "../components/APICalls";

class StudiosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studios: []
    };
  }

  async getStudios() {
    try {
      const response = await fetch("http://localhost:3001/api/v1/studios");
      const data = await response.json();
      console.log(data);
      this.setState({ studios: data });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    await this.getStudios();
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
              className="studioInput"
              type="text"
              placeholder="search"
              maxLength="50"
            />
          </div>
          <h3>Studios:</h3>
          <ul id="studioList">
            <StudioCards studios={this.state.studios} />
          </ul>
        </div>
      </div>
    );
  }
}

export default StudiosContainer;
