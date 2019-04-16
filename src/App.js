import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Lamp from './Lamp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Lamp on />
        <Lamp />
        </header>
      </div>
    );
  }
}

export default App;
