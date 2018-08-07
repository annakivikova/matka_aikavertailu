import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class AppMap extends Component {

/*  constructor() {
    super()
    this.updateMap = this.updateMap.bind(this);
    this.state = {
      position: [],
      positionTo: [],
    };
  }

  updateMap = () => {
    this.setState({
      position: this.props.onUpdate,
      positionTo: this.props.onUpdateTo,
    })
  }

  componentDidMount() {
    this.updateMap();
  }*/

  render() {
    let position = this.props.onUpdate;
    let positionTo = this.props.onUpdateTo;
    console.log('Map: ' + position);
    return (
      <Map center={position} zoom={13}>
          <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={position}>
          <Popup>
            Lähtöosoite
          </Popup>
        </Marker>
        <Marker position={positionTo}>
          <Popup>
            Kohdeosoite
          </Popup>
        </Marker>
      </Map>
    )
  }
}
