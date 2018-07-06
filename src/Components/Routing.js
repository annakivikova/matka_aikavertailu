import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getRouteQuery = gql`
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
`

class Routing extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <h6>Jotain</h6>
      </div>
    )
  }
}

export default graphql(getRouteQuery)(Routing);
