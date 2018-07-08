import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Routing = (props) => (
  console.log('This is coords in Routing: ' + props.passCoordsDown),
  <Query query={gql`
    {
      plan(
        from: {lat: 60.199196699999995, lon: 24.9397302}
        to: {lat: 60.168438, lon: 24.929283}
        numItineraries: 1
        modes: "BUS,TRAM,RAIL,SUBWAY,FERRY,WALK"
      ) {
        itineraries {
          duration
        }
      }
    }
  `}
  >
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      console.log(data.plan.itineraries.duration);

      return (
        <div>
          <p>
            {`Route: ${data.plan.itineraries[0].duration}`}
          </p>
        </div>
      );
    }}
  </Query>
);

export default Routing;


/*const Routing = () => (
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

      console.log(data.stop.name, data.stop.lat, data.stop.lon);

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

export default Routing;*/
