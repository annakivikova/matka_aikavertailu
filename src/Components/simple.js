import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class AppMap extends Component {
  /*state = {
    lat: this.props.lat,
    lng: this.props.lng,
    zoom: 13,
  }*/

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      lat: '',
      lng: 24.945831,
    }
  }

  onUpdate = (lat) => {
    this.setState({
      lat: this.props.updatedLat
    })
  };

  render() {
    /*let lat = this.props.lat;
    let lng = 24.945831;
    let position = [lat, lng];*/
    console.log([this.state.lat, 24.945831])
    let position = [this.state.lat, 24.945831] /*[60.192059, 24.945831]*/
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
