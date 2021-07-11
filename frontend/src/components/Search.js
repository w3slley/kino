import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieSearch: ''
    }
  }
  render() { 
    return ( 
      <>
      <form>
        <input onKeyUp={(e)=>(this.setState({movieSearch: e.target.value}))} placeholder="Search for movies"></input>
        <Link to={`/search/${this.state.movieSearch}`}><button>Search</button></Link>
      </form>
      </>
    );
  }
}

export default Search;