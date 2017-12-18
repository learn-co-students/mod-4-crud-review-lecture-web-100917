import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PoemContainer from './containers/PoemContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PoemContainer />
      </div>
    );
  }
}

export default App;
