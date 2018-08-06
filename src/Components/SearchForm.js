import React, { Component } from 'react';

export class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchFrom: '',
      searchTo: '',
    }
    //this.onSearchChange = this.onSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

/*  onSearchChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }*/

  handleSubmit(event) {
    //event.preventDefault;
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name);
    console.log(event.target.value);
  }

  render() {
    return (
      <form>

        <label>Lähtöosoite</label>
        <input type="text"
              onSubmit={this.handleSubmit}
              name="searchFrom"
              placeholder="Search..." />

        <label>Kohdeosoite</label>
        <input type="text"
              onSubmit={this.handleSubmit}
              name="searchTo"
              placeholder="Search..." />

        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>

      </form>
    );
  }
}
