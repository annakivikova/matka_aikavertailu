import React, { Component } from 'react';
import axios from 'axios';
import { SearchFormFrom} from './SearchFormFrom';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      address: ''
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    axios.get(`https://api.digitransit.fi/geocoding/v1/search?text=${query}&size=1`)
      .then(response => {
        this.setState({
          address: response.data.features
        });
      })
      .catch(error => {
        console.log('Osoitetta ei löytynyt', error);
      });
    }

  render() {
    return (
      <div className="Search">
        <p className="Search-intro">
        Jotain.
        </p>
        <SearchFormFrom onSearch={this.performSearch}/>
      </div>
    );
  }
}

export default Search;
