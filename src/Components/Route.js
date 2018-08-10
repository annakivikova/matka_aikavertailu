import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routing from './Routing';
import Mode from './ModeSelection';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

export class Route extends Component {

  constructor() {
    super();
    this.handleChangedMode = this.handleChangedMode.bind(this);
    this.state = {
      position: [60.16887, 24.93119],
      positionTo: [60.169438, 24.929283],
      mode: 'WALK',
    }
  }

  handleChangedMode(newMode) {
    this.createMode(newMode);
    console.log('Mode is: ' + this.state.mode);
  }

  handleUpdatedCoordinates() {
    this.setState({
    position: this.props.passCoords[0],
    positionTo: this.props.passCoords[1],
  })
    console.log("PROPS ROUTE " + this.props.passCoords)
  }

  createMode(mode) {
    if (mode === 'julkiset') {
      this.setState({
        mode: "BUS,TRAM,RAIL,SUBWAY,FERRY,WALK"
      });
    } else if (mode === 'auto') {
      this.setState({
        mode: "CAR,WALK"
      });
    } else if (mode === 'polkupyörä') {
      this.setState({
        mode: "BIKE"
      });
    }
  }

  render() {
    return(
      <ApolloProvider client={client}>
        <div>
          <Mode
            onChangedMode={this.handleChangedMode}
          />
          <Routing
            passCoordsDown={[this.state.position, this.state.positionTo]}
            passModeDown={this.state.mode}
          />
        </div>
      </ApolloProvider>
    )
  }
}

export default Route;

/*let queryCoords = this.props.passCoords;
if (typeof this.props.passCoords !== 'undefined'){
  queryCoords = [[60.168438, 24.9397302],[60.169438, 24.929283]];
  console.log('queryCoords undefined, fixing... ');
}
else {
  queryCoords = this.props.passCoords;
  console.log('Coords okay... ')
};
console.log('HELLO! ' + queryCoords)*/
