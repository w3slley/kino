import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class MovieCardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataFetched: false,
      movies: [],
      pageNumber: 1,
      totalResulst: 0,
      errors:[],
      noMoreMovies: false
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
    this.setState({pageNumber: 1, noMoreMovies: false}); //Getting first page of new search
    fetch(`http://localhost:8000/movies/search?q=${movieName}&p=1`)
    .then(response => response.json())
    .then(data => {
      this.setState({dataFetched: true})
      if(data.Response === 'True'){
        this.setState({
          movies: data.Search, 
          totalResults: parseInt(data.totalResults),
          errors: []
        })
      }
      else if(data.Response === 'False'){ //No movie was found on
        this.setState({errors: [data.Error]})
      }
      else{

        //add error handlers later
      }
    });
  }

  loadMore(){
    console.log(this.state.movies.length, this.state.totalResults);
    if(this.state.movies.length === this.state.totalResults){
      this.setState({
        noMoreMovies: true
      });
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
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        {!this.state.dataFetched? 
        <Loader 
          type="TailSpin"
          color="#262626" 
          height={80} 
          width={80} 
        />  : ''}

        {this.state.dataFetched && this.state.errors.length === 0 ? 
        <>
        <div className="row">
          {this.state.movies.map((movie)=>(
            <MovieCard key={movie.imdbID} data={movie} />
          ))}
        </div>
        
        {!this.state.noMoreMovies &&
          <button className="btn btn-outline-secondary" onClick={()=>this.loadMore()}>Load more</button>
        }
        </>
        : this.state.errors}
      </div>
      </>
    );
  }
}

export default MovieCardContainer;