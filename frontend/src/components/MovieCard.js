import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component {
  render() { 
    return ( 
      <div style={container}>
        <div style={leftBox}>
          <img src={this.props.data.Poster} style={img} alt='' />
        </div>
        <div style={rightBox}>
          <p>{this.props.data.Title} ({this.props.data.Year})</p>
          <Link to={`/movies/${this.props.data.imdbID}`}><button>More</button></Link>
        </div>
         
          
      </div>
    );
  }
}
const img={
  width: '100px'
}
const container = {
  display: 'flex',
  border: '1px solid black'
}
const leftBox = {
  position: 'relative',
  width: '30%'
}
const rightBox = {
  position: 'relative',
  width: '90%'
}

export default MovieCard;