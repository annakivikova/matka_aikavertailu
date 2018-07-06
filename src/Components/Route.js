import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routing from './Routing';

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
});

const Route = () => (
  <ApolloProvider client={client}>
    <div>
      <Routing />
    </div>
  </ApolloProvider>
)

export default Route;
