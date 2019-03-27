import React, { Component } from 'react';
import Home from './Home.js';
import Button from './Button.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Button />
        <Home />
      </div>
    );
  }
}

export default App;