import React, { Component } from "react";

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

  createStudioCards(studios) {
    return studios.map(studio => {
      return (
        <li>
          <div className="studioCard">
            <h1>{studio.name}</h1>
            <h3>{studio.class_type}</h3>
            <p>{studio.description}</p>
            <p>{studio.address}</p>
          </div>
        </li>
      );
    });
  }

  async componentDidMount() {
    await this.getStudios();
  }

  render() {
    console.log(this.state.studios);
    return (
      <div>
        <div className="inputContainer">
          <input
            className="studioInput"
            type="text"
            placeholder="search"
            maxLength="50"
          />
        </div>
        <div className="listWrapper">
          <h3>Studios:</h3>
          <ul id="studioList">{this.createStudioCards(this.state.studios)}</ul>
        </div>
      </div>
    );
  }
}

export default StudiosContainer;
