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

//build POST Request for Studios
//build GET Request for Classes
//build POST Request for Classes
//build POST Request for Reservations
//build PATCH Request for Reservations

//Should I make multiple requests on the same page if I need the data?
//Should I combine the request?
//Should I create a custom request with limited scope?
