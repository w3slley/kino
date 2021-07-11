import React, { Component } from 'react';
import MovieCard from './MovieCard.js';

class MovieCardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      pageNumber: 1,
      totalResulst: 0,
      errors:[]
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
    this.getMovies();
  }

  getMovies(){
    let movieName = this.props.match.params.searchMovie;
    this.setState({pageNumber: 1}); //Getting first page of new search
    fetch(`http://localhost:8000/movies/search?q=${movieName}&p=1`)
    .then(response => response.json())
    .then(data => {
      if(data.Response === 'True'){
        this.setState({
          movies: data.Search, 
          totalResults: parseInt(data.totalResults),
          errors: []
        })
      }
      else{
        this.setState({
          errors: ['NO_MOVIE']
        })
        //add error handlers later
      }
    });
  }

  loadMore(){
    console.log(this.state.movies.length, this.state.totalResults);
    if(this.state.movies.length === this.state.totalResults){
      console.log('no more results')
    }
    else{
      let newPageNumber = this.state.pageNumber + 1;
      
      this.setState({pageNumber: newPageNumber});
      let movieName = this.props.match.params.searchMovie;
      fetch(`http://localhost:8000/movies/search?q=${movieName}&p=${newPageNumber}`)
      .then(response => response.json())
      .then(data => this.setState({movies: [...this.state.movies, ...data.Search]}));
    }
  }

  render() { 
    return (
      <>
      <div style={container}>  
        {this.state.errors.length === 0 ? this.state.movies.map((movie)=>(
          <MovieCard key={movie.imdbID} data={movie} />
        )) : 'No movies found :('}
      </div>
      <button onClick={()=>this.loadMore()}>Load more</button>
      </>
    );
  }
}

const container = {
  margin: '20px 0',
  display: 'grid',
  gridTemplateColumns: '350px 350px 350px'
}

export default MovieCardContainer;