import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Routing = (props) => (
    console.log('Mode in routing is ' + props.passModeDown),
    <Query
      query={gql`
        {
          plan(
            from: {lat: ${props.passCoordsDown[0][0]}, lon: ${props.passCoordsDown[0][1]}}
            to: {lat: ${props.passCoordsDown[1][0]}, lon: ${props.passCoordsDown[1][1]}}
            numItineraries: 1
            modes: "${props.passModeDown}"
          ) {
            itineraries {
              duration
            }
          }
        }
      `}
      >
        {({loading, error, data}) => {
          if (loading) return <p>Ladataan...</p>;
          if (error) return <p>Virhe</p>;
          if (data.plan.itineraries[0] === undefined){
            console.log(data.plan);
            return <p>Reittiä ei löytynyt</p>;
          }
          return (
            <div>
              <p>
                {`Matka-aika: ${data.plan.itineraries[0].duration} sekuntia`}
              </p>
            </div>
          );
        }}
    </Query>
  );

export default Routing;
