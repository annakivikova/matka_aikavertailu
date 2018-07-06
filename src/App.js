import React, { Component } from 'react';

import { SearchFrom } from './Components/SearchFrom';
import { SearchTo } from './Components/SearchTo';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Route from './Components/Route';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedLatFrom: '',
      updatedLngFrom: '',
    }
  }

  onUpdate = (latFrom, lngFrom) => {
    this.setState({
      updatedLatFrom: latFrom,
      updatedLngFrom: lngFrom,
    })
  };

  render() {
    let position = [this.state.updatedLatFrom, this.state.updatedLngFrom]
    return (
      <div>
        <h1>Joku otsikko</h1>
        <h2>Ehkä kartta</h2>
          <Map center ={position} zoom={13}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        <h2>Osoitteen haku</h2>
          <h3>Lähtöosoite</h3>
            <SearchFrom
              onUpdate={this.onUpdate.bind(this)}
            />
          <h3>Päämäärä</h3>
            <SearchTo />
            <Route />
      </div>
    )
  }
}
