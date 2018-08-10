import React, { Component } from 'react';
import axios from 'axios';
import { SearchFormTo } from './SearchFormTo';

class SearchTo extends Component {
  constructor(props) {
    super(props);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.state = {
      lat: 60.16887,
      lng: 24.93119,
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

  onSearchUpdate() {
    this.props.onChange([this.state.lat, this.state.lng]);
  }

  render() {
    console.log('pos in component SearchTo is: lat ' + this.state.lat + ' and lng ' + this.state.lng);
    return (
      <div onSubmit={this.onSearchUpdate}>
        <SearchFormTo
          onSearch={this.performSearch}
        />
      </div>
    );
  }
}

export default SearchTo;
