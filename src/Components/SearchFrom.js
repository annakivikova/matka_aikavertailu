import React, { Component } from 'react';
import axios from 'axios';
import { SearchFormFrom } from './SearchFormFrom';

export class SearchFrom extends Component {
  constructor(props) {
    super(props);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
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

  onSearchUpdate() {
    const lat = 60.192059;
    this.props.onChange(lat);
    //this.setState({lat: this.state.lat});
  }

  render() {
    console.log(this.state);
    return (
      <div onChange={this.onSearchUpdate}>
        <SearchFormFrom
          onSearch={this.performSearch}
        />
      </div>
    );
  }
}
