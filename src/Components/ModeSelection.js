import React, { Component } from 'react';

export class Modes extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const mode = e.target.value;
    this.props.onChange(mode);
  }

  render() {
    return(
      <div>
        <select id="modes" onChange={this.handleChange}>
          <option value="bus">
            Bus
          </option>
          <option value="tram">
            Tram
          </option>
          <option value="rail">
            Rail
          </option>
          <option value="subway">
            Subway
          </option>
          <option value="ferry">
            Ferry
          </option>
          <option value="walk">
            Walk
          </option>
        </select>
      </div>
    )
  }
}
