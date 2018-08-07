import React, { Component } from 'react';

import Route from './Components/Route';
import { AppMap } from './Components/simple';
//import { SearchFrom } from './Components/SearchFrom';
//import { SearchTo } from './Components/SearchTo';
import { Search } from './Components/Search';

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

/*  onUpdate(positionFrom, positionTo) {
    this.setState({
      updatedPos: positionFrom,
      updatedPosTo: positionTo,
    })
  }*/

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
        <h3>Haku</h3>
          <Search
            onChange={this.onUpdate}
          />

          <AppMap
            onUpdate={this.state.updatedPos}
            onUpdateTo={this.state.updatedPosTo}

          />
          <Route
            passCoords={[this.state.updatedPos, this.state.updatedPosTo]}
          />
      </div>
    )
  }
}

/*return (
  <div>
    <h3>Haku</h3>
      <SearchFrom
        onChange={this.onUpdate}
      />

      <SearchTo
        onChange={this.onUpdateTo}
      />

      <AppMap
        onUpdate={this.state.updatedPos}
        onUpdateTo={this.state.updatedPosTo}
      />
      
      <Route
        passCoords={[this.state.updatedPos, this.state.updatedPosTo]}
      />
  </div>*/
