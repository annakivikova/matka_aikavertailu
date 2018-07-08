import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Routing = () => (
  <Query query={gql`
    {
      stop(id: "HSL:1040129") {
        name
        lat
        lon
        wheelchairBoarding
      }
    }
  `}
  >
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return (
        <div>
          <p>
            {`${data.stop.name}: ${data.stop.lat} ${data.stop.lon}`}
          </p>
        </div>
      );
    }}
  </Query>
);

export default Routing;
