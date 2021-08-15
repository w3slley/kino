import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieSearch: ''
    }
  }

  componentDidMount(){
    document.title = 'Search movies | Kino';
  }

  render() { 
    return ( 
      <>
      <form style={{justifyContent:'center'}} className="form-inline mt-5">
        <input onKeyUp={(e)=>this.setState({movieSearch: e.target.value})} className="form-control mr-sm-2" type="search" placeholder="Search for movies" aria-label="Search"></input>
        <Link to={`/search/${this.state.movieSearch}`}><button className='btn btn-outline-primary my-2 my-sm-0'>Search</button></Link>
      </form>
     
      </>
    );
  }
}

export default Search;