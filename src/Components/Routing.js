import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Routing = () => (
  <Query query={gql`
    {
      routes(name: "58", modes: "BUS") {
        id
        agency {
          id
        }
        shortName
        longName
        desc
      }
    }
  `}
  >
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return data.routes.map(({id, agency,shortName,longName,desc,}) => (
        <div>
          <p>{`${shortName}`}</p>
        </div>
      ))
    }}
  </Query>
);

export default Routing;
