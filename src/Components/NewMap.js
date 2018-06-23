import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { LeafletMap, TileLayer, Marker, Popup } from 'leaflet';
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

export class SimpleExample extends Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

ReactDOM.render(<SimpleExample />, document.getElementById('mapid'))
