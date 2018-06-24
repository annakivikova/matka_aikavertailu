import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { SearchFormFrom } from './Components/SearchFormFrom';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      address: ''
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
      .then(response => {
        this.setState({
          address: response.data.features
        });
      })
      .catch(error => {
        console.log('Osoitetta ei löytynyt', error);
      });
  }

  render() {
    console.log(this.state.address)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matka-aikavertailu</h1>
        </header>
        <p className="App-intro">
          Jotain.
        </p>
        <img src="https://cdn.digitransit.fi/map/v1/hsl-map/16/37311/18963@2x.png" />
        <SearchFormFrom onSearch={this.performSearch}/>
      </div>
    );
  }
}

export default App;
