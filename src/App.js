import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";

const homer = {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    working: true
    };
  }
  render() {
    const x = this.state.working ? 'App-logo-on' : 'App-logo-off';
    const func = () => {
      this.setState({ working: !this.state.working});
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={x} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={func} style={{fontSize:"200%"}}>Click Me</button>
        <Quote {...homer}/>
      </div>
    );
  }
}

export default App;
