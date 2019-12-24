import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import HomeContainer from "./Containers/HomeContainer";
import MyScheduleContainer from "./Containers/MyScheduleContainer";
import StudiosContainer from "./Containers/Studios/StudiosContainer";
import ClassesContainer from "./Containers/Classes/ClassesContainer";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <h1>Fitness Booker</h1>
          </div>
        </div>

        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/MySchedule" component={MyScheduleContainer} />
            <Route exact path="/studios" component={StudiosContainer} />
            <Route exact path="/classes" component={ClassesContainer} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
