import React, { Component } from 'react';
import Home from './Home.js';
import Logo from './color_logo_transparent.png';
import Header from './Header.js';
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <header className="col-sm-4 offset-sm-4">
            <img src={Logo} className="mx-auto" alt="Logo" />
          </header>
        </div>
        <div className="row">
          <Home />
          <Header />
        </div>
      </div>
    );
  }
}

export default App;