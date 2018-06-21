import React from 'react';
import axios from 'axios';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.get('https://api.digitransit.fi/geocoding/v1/search?text=kamppi&size=1')
    .then(response => console.log(response))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Lähtöosoite:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
