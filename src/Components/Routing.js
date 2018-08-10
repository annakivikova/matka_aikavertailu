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
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          if (data.plan.itineraries[0] === undefined){
            console.log(data.plan);
            return <p>Undefined</p>;
          }
          return (
            <div>
              <p>
                {`Matka-aika: ${data.plan.itineraries[0].duration}`}
              </p>
            </div>
          );
        }}
    </Query>
  );

export default Routing;

/*const Routing = (props) => (
  console.log('this is coords in Routing: ' + props.passCoordsDown),
  console.log('1st coord: ' + props.passCoordsDown[0][0]),
    <Query
      query={gql`
        {
          plan(
            from: {lat: ${props.passCoordsDown[0][0]}, lon: ${props.passCoordsDown[0][1]}}
            to: {lat: ${props.passCoordsDown[1][0]}, lon: ${props.passCoordsDown[1][1]}}
            numItineraries: 1
            modes: "WALK,RAIL"
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

          return (
            <div>
              <p>
                {`Matka-aika: ${data.plan.itineraries[0].duration}`}
              </p>
            </div>
          );
        }}
    </Query>
  );*/
