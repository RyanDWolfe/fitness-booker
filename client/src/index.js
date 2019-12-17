import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/NavBar";
import MyScheduleContainer from "./Containers/MyScheduleContainer";
import StudiosContainer from "./Containers/StudiosContainer";
import ClassesContainer from "./Containers/ClassesContainer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/MySchedule" component={MyScheduleContainer} />
      <Route exact path="/studios" component={StudiosContainer} />
      <Route exact path="/classes" component={ClassesContainer} />
      <App />
    </div>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
