import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routing from './Routing';
import { Modes } from './ModeSelection';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

export class Route extends Component {
  render() {
    return(
      <ApolloProvider client={client}>
        <div>
          <Modes />
          <Routing
            passCoordsDown={this.props.passCoords}
          />
        </div>
      </ApolloProvider>
    )
  }
}

export default Route;
