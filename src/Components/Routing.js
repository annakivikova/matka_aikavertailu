import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Routing = () => (
  <Query query={gql`
    {
      plan(
        from: {lat: 60.199196699999995, lon: 24.9397302}
        to: {lat: 60.168438, lon: 24.929283}
        numItineraries: 3
        modes: "WALK,RAIL"
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

      return (
        <div>
          <p>
            {`${data.plan.itineraries.legs}`}
          </p>
        </div>
      );
    }}
  </Query>
);

export default Routing;

/*stop(id: "HSL:1040129") {
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
);*/
