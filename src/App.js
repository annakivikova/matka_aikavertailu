import React, { Component } from 'react';

import { SearchFrom } from './Components/SearchFrom';
import { SearchTo } from './Components/SearchTo';
//import Route from './Components/Route';
import { AppMap } from './Components/simple';

export class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      lat: '',
      /*lng: '',*/
    }
  }

  onUpdate = (latFrom /*lngFrom*/) => {
    this.setState({
      lat: latFrom,
      /*lng: lngFrom,*/
    })
  };

  render() {
    const lat = this.props.lat
    /*const lng = this.props.lng*/
    return (
      <div>
        <h1>Joku otsikko</h1>
        <h2>Ehkä kartta</h2>
          <AppMap
            /*passedVal={this.props.lat}*/
          />
        <h2>Osoitteen haku</h2>
        <h3>Lähtöosoite</h3>
          <SearchFrom
            onUpdate={this.onUpdate}
          />
        <h3>Päämäärä</h3>
          <SearchTo />
      </div>
    )
  }
}
