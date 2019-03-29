import React, { Component } from 'react';
import Home from './Home.js';
import Logo from './color_logo_transparent.png';
import Header from './Header.js';
import Welcome from './Welcome.js';
import { Route, BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import Sample from './Sample';
import Footer from './Footer';


class App extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <header className="col-sm-4 offset-sm-4">
            <img src={Logo} className="mx-auto" alt="Logo" />
          </header>
        </div>
        <div>
          <Header />
        </div>

        <br />
        <div><Sample /></div>

        <BrowserRouter>
          <Route path="/welcome" render={() => <Welcome />} />
        </BrowserRouter>

        <div className="row">
          <Home />
        </div>
        <div className="col-sm-4 offset-sm-4 mx-auto">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;





