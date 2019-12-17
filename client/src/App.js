import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Fitness Booker</h1>
        </div>
      </div>
    );
  }
}

export default App;

// export default connect(state => ({ items: state.items }), { addItem })(App);
