import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routing from './Routing';
import Mode from './ModeSelection';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

export class Route extends Component {

  state = {
    position: [60.16887, 24.93119],
    positionTo: [60.169438, 24.929283],
  }

  handleUpdatedCoordinates() {
      this.setState({
      position: this.props.onUpdate,
      positionTo: this.props.onUpdateTo,
    })
    console.log("PROPS POS"+this.props.onUpdate)
  }

  render() {
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
    return(
      <ApolloProvider client={client}>
        <div>
          <Mode />
          <Routing passCoordsDown={[this.state.position, this.state.positionTo]}/>
        </div>
      </ApolloProvider>
    )
  }
}

export default Route;

/*constructor(props) {
  super(props);
  this.changeMode = this.changeMode.bind(this);
  this.state = {
    mode: ''
  }

  changeMode(newMode) {
    this.setState({
      mode: newMode
    });
  }

  <Routing
    passCoordsDown={queryCoords}
  />*/
