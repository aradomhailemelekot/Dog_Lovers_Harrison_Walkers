import React, { Component } from 'react';
import Home from './Home.js';
import logo from './logo.svg';
import Header from './Header.js';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Home />
        <Header />
      </div>
    );
  }
}

export default App;