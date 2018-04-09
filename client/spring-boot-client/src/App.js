import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerContainer from './containers/BeerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerContainer />
        <BadBeerContainer />
      </div>
    );
  }
}

export default App;
