import React, { Component } from 'react';
import axios from 'axios';

export class SearchFormTo extends Component {
  constructor() {
    super();
    this.state = {address: ''};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://api.digitransit.fi/geocoding/v1/search')
      .then(response => this.setState({address: response.data.name}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.address}</p>
      </div>
    )
  }
}
export default SearchAddressFrom
