import React, { Component } from 'react';

import { SearchFrom } from './Components/SearchFrom';
import { SearchTo } from './Components/SearchTo';
import Route from './Components/Route';
import { AppMap } from './Components/simple';

export class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateTo = this.onUpdateTo.bind(this);
    this.state = {
      updatedPos: '',
      updatedPosTo: '',
    }
  }

  onUpdate(pos) {
    this.setState({
      updatedPos: pos
    });
  }

  onUpdateTo(pos) {
    this.setState({
      updatedPosTo: pos
    });
  }

  render() {
    console.log('updatedPos in component App is: ' + this.state.updatedPos + 'updatedPosTo in component App is: ' + this.state.updatedPosTo);
    return (
      <div>
        <h3>Lähtöosoite</h3>
          <SearchFrom
            onChange={this.onUpdate}
          />
        <h3>Kohdeosoite</h3>
          <SearchTo
            onChange={this.onUpdateTo}
          />
          <AppMap
            onUpdate={this.state.updatedPos}
          />
          <Route />
      </div>
    )
  }
}
