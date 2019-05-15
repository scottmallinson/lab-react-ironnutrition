import React, { Component } from 'react'

class Search extends Component {
  state = { 
    search: ''
  }

  handleChange(event) {
    event.preventDefault();
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;
    this.setState( { [name]: value } );
    this.props.searchQuery(value);
  }

  render() {
    return (
      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value={this.state.search} onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}

export default Search;