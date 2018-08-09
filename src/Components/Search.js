import React, { Component } from 'react';
import axios from 'axios';
import { SearchForm } from './SearchForm';

export class Search extends Component {
  constructor() {
    super();
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.state = {
      latFrom: '',
      lngFrom: '',
      //latTo: '',
      //lngTo: '',
    };
  }

  componentDidMount() {
      this.performSearch();
    }

    performSearch = (query) => {
      axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
        .then(response => {
          this.setState({
            latFrom: response.data.features[0].geometry.coordinates[1],
            lngFrom: response.data.features[0].geometry.coordinates[0],
          });
        })
        .catch(error => {
          console.log('Osoitetta ei löytynyt', error);
        });
    }

/*  componentDidMount() {
    this.performSearchFrom();
    this.performSearchTo();
  }

  performSearchFrom = (query) => {
    axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
      .then(response => {
        this.setState({
          latFrom: response.data.features[0].geometry.coordinates[1],
          lngFrom: response.data.features[0].geometry.coordinates[0],
        });
      })
      .catch(error => {
        console.log('Osoitetta ei löytynyt', error);
      });
  }

  performSearchTo = (query) => {
    axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
      .then(response => {
        this.setState({
          latTo: response.data.features[0].geometry.coordinates[1],
          lngTo: response.data.features[0].geometry.coordinates[0],
        });
      })
      .catch(error => {
        console.log('Osoitetta ei löytynyt', error);
      });
  }*/

  onSearchUpdate() {
    this.props.onChange([this.state.latFrom, this.state.lngFrom]);
  }

  render() {
    console.log('pos in component SearchFrom is: lat ' + this.state.latFrom + ' and lng ' + this.state.lngFrom + 'pos in component SearchTo is: lat ' + this.state.latTo + ' and lng ' + this.state.lngTo);
    return (
      <div onChange={this.onSearchUpdate}>
        <SearchForm
          onSearch={this.performSearch}
        />
      </div>
    );
  }
}
