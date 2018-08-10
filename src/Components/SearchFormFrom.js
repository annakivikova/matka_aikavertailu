import React, { Component } from 'react';

export class SearchFormFrom extends Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label className="is-hidden" htmlFor="search">Lähtöosoite</label>
        <input type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Etsi..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">Etsi</i></button>
      </form>
    );
  }
}
