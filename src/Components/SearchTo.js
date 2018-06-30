import React, { Component } from 'react';
import axios from 'axios';
import { SearchFormTo } from './SearchFormTo';

export class SearchTo extends Component {

  constructor() {
    super();
    this.state = {
      lng: '',
      lat: '',
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
      .then(response => {
        this.setState({
          lng: response.data.features[0].geometry.coordinates[0],
          lat: response.data.features[0].geometry.coordinates[1],
        });
      })
      .catch(error => {
        console.log('Osoitetta ei löytynyt', error);
      });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchFormTo onSearch={this.performSearch} />
      </div>
    );
  }
}