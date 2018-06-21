import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Form } from './Form';
import { SearchAddressFrom } from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matka-aikavertailu</h1>
        </header>
        <p className="App-intro">
          <img src="https://cdn.digitransit.fi/map/v1/hsl-map/16/37311/18963@2x.png" />
          <Form />
          <SearchAddressFrom />
        </p>
      </div>
    );
  }
}

export default App;
