import React, { Component } from 'react';

export class SearchForm extends Component {

  state = {
    searchTextFrom: '',
    //searchTo: '',
  }

  onSearchChange = e => {
    this.setState({ searchTextFrom: e.target.value });
    //this.setState({ searchTo: e.target.value });
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

        <label className="addressTo" htmlFor="search">Kohdeosoite</label>
        <input type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Search..." />

        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}
