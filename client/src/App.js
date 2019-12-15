import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudiosContainer from './components/StudiosContainer'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Studio List</h1>
        </div>
        <StudiosContainer />
      </div>
    );
  }
}

export default App;
