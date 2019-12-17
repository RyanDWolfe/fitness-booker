import React, { Component } from "react";

class APICalls extends Component {
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
}

// const getStudios = () => {
//   try {
//     const response = fetch("http://localhost:3001/api/v1/studios");
//     const data = response.json();
//     console.log(data);
//     this.setState({ studios: data });
//   } catch (err) {
//     console.log(err);
//   }
// };

export default APICalls;
