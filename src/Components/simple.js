import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class AppMap extends Component {

  state = {
    position: [60.16887, 24.93119],
    positionTo: [60.16887, 24.93119],
  }

  handleUpdatedPosition() {
      this.setState({
      position: this.props.onUpdate,
      positionTo: this.props.onUpdateTo,
    })
    console.log("PROPS POS"+this.props.onUpdate)
  }

  render() {
    console.log('Map: ' + this.state.position);
    /*let position = this.props.onUpdate;
    let positionTo = this.props.onUpdateTo;*/
    let marker = (
      <Marker position={this.state.position}>
        <Popup>
          Lähtöosoite
        </Popup>
      </Marker>
    )

    let markerTo = (
      <Marker position={this.state.positionTo}>
        <Popup>
          Kohdeosoite
        </Popup>
      </Marker>
    )

    return (
      <Map center={this.state.position} zoom={13}>
          <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker}
          {markerTo}
      </Map>
    )
  }
}
