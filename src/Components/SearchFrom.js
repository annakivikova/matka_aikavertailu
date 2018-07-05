import React, { Component } from 'react';
import axios from 'axios';
import { SearchFormFrom } from './SearchFormFrom';

export class SearchFrom extends Component {
  constructor() {
    super();
    this.state = {
      lngFrom: '',
      latFrom: '',
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
      .then(response => {
        this.setState({
          lngFrom: response.data.features[0].geometry.coordinates[0],
          latFrom: response.data.features[0].geometry.coordinates[1],
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
        <SearchFormFrom onSearch={this.performSearch} />
      </div>
    );
  }
}
