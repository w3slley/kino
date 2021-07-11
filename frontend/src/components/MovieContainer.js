import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

class MovieContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  //Re-render component if searchMovie value in props changes
  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.searchMovie !== this.props.match.params.searchMovie){
      console.log(this.props.match.params.searchMovie);
      this.getMovies(this.props.match.params.searchMovie);
    }
    
  }
  
  componentDidMount(){
    console.log(this.props.match.params.searchMovie);
    this.getMovies(this.props.match.params.searchMovie);
  }

  getMovies(movieName){
    fetch(`http://localhost:8000/movies/search?q=${movieName}&p=1`)
    .then(response => response.json())
    .then(data => this.setState({movies: data}));
  }

  render() { 
    return (
      <div style={container}>  
      {this.state.movies.map((movie)=>(
        <MovieCard key={movie.imdbID} data={movie} />
      ))}
      </div>
    );
  }
}

const container = {
  margin: '20px 0',
  display: 'grid',
  gridTemplateColumns: '350px 350px 350px'
}

export default MovieContainer;