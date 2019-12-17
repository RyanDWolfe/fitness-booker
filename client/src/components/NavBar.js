import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="navItem">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/MySchedule" exact>
            My Schedule
          </NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/studios" exact>
            Studios
          </NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/classes" exact>
            Classes
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
