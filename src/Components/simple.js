import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class AppMap extends Component {
/*  state = {
    lat: 60.192059,
    lng: 24.945831,
    zoom: 13,
  }*/

  render() {
    const position = [{this.props.latFrom}, {this.props.lngFrom}] /*[60.192059, 24.945831]*/
    return (
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
    )
  }
}
