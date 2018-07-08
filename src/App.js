import React, { Component } from 'react';

import { SearchFrom } from './Components/SearchFrom';
//import { SearchTo } from './Components/SearchTo';
//import Route from './Components/Route';
import { AppMap } from './Components/simple';

export class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      updatedPos: ''
    }
  }

  onUpdate(pos) {
    this.setState({
      updatedPos: pos
    });
  }

  render() {
    return (
      <div>
        <h3>Lähtöosoite</h3>
          <SearchFrom
            onChange={this.onUpdate}
          />
          <AppMap
            onUpdate={this.state.updatedPos}
          />
      </div>
    )
  }
}
