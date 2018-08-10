import React, { Component } from 'react';

import Route from './Components/Route';
import { AppMap } from './Components/simple';
import SearchFrom from './Components/SearchFrom';
import SearchTo from './Components/SearchTo';

export class App extends Component {

  constructor() {
    super();
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateTo = this.onUpdateTo.bind(this);
    this.myRef = React.createRef();
    this.state = {
      updatedPos: [60.16887, 24.93119],
      updatedPosTo: [60.16887, 24.93119],
    }
  }

  onUpdate(pos) {
    this.setState({
      updatedPos: pos,
    });
    this.refs.appmap.handleUpdatedPosition();
    this.refs.route.handleUpdatedCoordinates();
    }


  onUpdateTo(pos) {
    this.setState({
      updatedPosTo: pos
    });
    this.refs.appmap.handleUpdatedPosition();
    this.refs.route.handleUpdatedCoordinates();
  }

  render() {
    console.log('updatedPos in component App is: ' + this.state.updatedPos + 'updatedPosTo in component App is: ' + this.state.updatedPosTo);
    return (
      <div>
        <h3>Matka-aikavertailu</h3>
        <h4>Haku</h4>
          <SearchFrom
            onChange={this.onUpdate}
          />

          <SearchTo
            onChange={this.onUpdateTo}
          />

          <Route
            ref="route"
            passCoords={[this.state.updatedPos, this.state.updatedPosTo]}
          />

          <AppMap
            ref="appmap"
            onUpdate={this.state.updatedPos}
            onUpdateTo={this.state.updatedPosTo}
          />

      </div>
    )
  }
}
