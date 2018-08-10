import React, { Component } from 'react';

class Mode extends Component {

  constructor() {
    super();
    this.onUpdatedMode = this.onUpdatedMode.bind(this);
    this.handleChangedMode = this.handleChangedMode.bind(this);
    this.state = {
      mode: ''
    }
  }

  handleChangedMode() {
    let selector = document.getElementById('modes');
    let value = selector[selector.selectedIndex].value;
    this.setState({
      mode: value
    })
    console.log("VALUE " + value + "STATE " + this.state.mode);
    this.onUpdatedMode();
  }

  onUpdatedMode() {
    this.props.onChangedMode(this.state.mode)
  }

  render() {
    return (
      <div>
        <select id="modes" onClick={this.handleChangedMode}>
          <option value="julkiset">
            Julkiset
          </option>
          <option value="auto">
            Auto
          </option>
          <option value="polkupyörä">
            Polkupyörä
          </option>
        </select>
      </div>
    );
  }
}

export default Mode;
