import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

class Route extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first React Application</h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default Route;
