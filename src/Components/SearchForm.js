import React, { Component } from 'react';

export class SearchForm extends Component {

  state = {
    searchTextFrom: '',
    searchTextTo: '',
  }

  onSearchChange = e => {
    this.setState({ searchTextFrom: e.target.value });
    this.setState({ searchTextTo: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>

        <label className="addressFrom" htmlFor="search">Lähtöosoite</label>
        <input type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Search..." />

        <label className="adressTo" htmlFor="search">Kohdeosoite</label>
        <input type="searvh"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Search..." />

        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}
