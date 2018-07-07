import React, { Component } from 'react';

import { SearchFrom } from './Components/SearchFrom';
//import { SearchTo } from './Components/SearchTo';
//import Route from './Components/Route';
import { AppMap } from './Components/simple';

export class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      updatedLat: ''
    }
  }

  onUpdate(lat) {
    this.setState({
      updatedLat: lat
    });
  }

  render() {
    /*const lat = this.props.lat*/
    /*const lng = this.props.lng*/
    return (
      <div>
        <h3>Lähtöosoite</h3>
          <SearchFrom
            onChange={this.onUpdate}
          />
          <AppMap
            lat={this.state.lat}
          />
      </div>
    )
  }
}
