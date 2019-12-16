import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div class="navBar">
        <div class="navItem">
          <NavLink to="/studios" exact>
            Studios
          </NavLink>
        </div>
        <div class="navItem">
          <NavLink to="/classes" exact>
            Classes
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
