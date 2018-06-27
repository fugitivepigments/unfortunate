import React, { Component } from 'react';
import logo from './fortune_cookie_whole.png';
import './App.css';
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
          <h1 className="App-title">Unfortunate Cookies</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
