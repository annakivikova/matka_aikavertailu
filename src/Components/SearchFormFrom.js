import React, { Component } from 'react';

export class SearchFormFrom extends Component {
  /*constructor() {
    super()
    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchText: ''
    }
  }*/

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
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
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
