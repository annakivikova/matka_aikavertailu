import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Routing = () => (
  <Query query={gql`
    {
      plan(
        from: {lat: 60.168992, lon: 24.932366}
        to: {lat: 60.175294, lon: 24.684855}
        numItineraries: 3
      ) {
        itineraries {
          legs {
            startTime
            endTime
            mode
            duration
            realTime
            distance
            transitLeg
          }
        }
      }
    }
  `}
  >
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return data.plan.map(({legs}) => (
        <div>
          <p>{`${legs}`}</p>
        </div>
      ))
    }}
  </Query>
);

export default Routing;

/*{
  stops(name: "4040") {
    id
    name
    wheelchairBoarding
  }
}data.stops.map(({id, name, wheelChairBoarding,})
*/
