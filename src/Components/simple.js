import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class AppMap extends Component {
  /*state = {
    lat: this.props.lat,
    lng: this.props.lng,
    zoom: 13,
  }*/

  constructor() {
    super();
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      lat: '',
      lng: 24.945831,
    }
  }

  onUpdate = (lat) => {
    this.setState({
      lat: this.props.lat
    })
  };

  render() {
    let position = [this.state.lat, this.state.lng] /*[60.192059, 24.945831]*/
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
