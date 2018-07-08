import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class AppMap extends Component {

  render() {

    let position = this.props.onUpdate
    return (
      <Map center={position} zoom={13}>
          <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[60.20, 25.0]}>
        </Marker>
      </Map>
    )
  }
}
