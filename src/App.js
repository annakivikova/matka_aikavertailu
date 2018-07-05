import React, { Component } from 'react';

import { SearchFrom } from './Components/SearchFrom';
import { SearchTo } from './Components/SearchTo';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
//import { AppMap } from './Components/simple';

export class App extends React.Component {
  /*state = {
    lat: 60.16887,
    lng: 24.93119,
    zoom: 13,
  }*/

  constructor(props) {
    super(props);

    this.state = {
      latFrom: '',
      lngFrom: '',
    }
  }

  onUpdate = (val) => {
    this.setState({
      latFrom: val,
      lngFrom: val,
    })
  };

  render() {
    const position = [this.state.latFrom, this.state.lngFrom]
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
            <SearchFrom search={this.onSearch}/>
          <h3>Päämäärä</h3>
            <SearchTo />
      </div>
    )
  }
}

/*  render() {
    return (
      <div>
        <h1>Joku otsikko</h1>
        <h2>Ehkä kartta</h2>
          <AppMap />
        <h2>Osoitteen haku</h2>
          <SearchFrom search={this.onSearchFrom}/>
          <SearchTo />
      </div>
    )
  }
}*/
