import React, { Component } from 'react';
import MovieCard from './MovieCard.js';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class FavoriteMovieContainer extends Component {
  state = {
      dataFetched: false,
      movies: [],
  }

  componentDidMount(){
    // Retreiving user favorite movies if they are logged in
    if(localStorage.getItem('user') != null){
      this.getFavoriteMovies();
    }
  }

  getFavoriteMovies(){
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    fetch(`/movies/getFavorites/${loggedUser.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({dataFetched: true});
      if(data.status === 'success'){
        this.setState({
          movies: data.data
        })
      }
      else if(data.status === 'failed'){ //No movie was found on
        console.log(data.message)
      }
      else{
        //add error handlers later
      }
    });
  }

  removeFavoriteMovie(imdbID){
    let newMovies = this.state.movies.filter((movie)=>movie.imdbID != imdbID)
    this.setState({movies: newMovies});
  }

  render() { 
    return (
      <>
      {this.state.dataFetched && this.state.movies.length === 0 ?
        <p>You don't have any favorite movies :(</p>
        :
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {!this.state.dataFetched? 
          <Loader 
            type="TailSpin"
            color="#262626" 
            height={80} 
            width={80} 
          />  : ''}

          {this.state.dataFetched ? 
          <>
          <div className="row">
            {this.state.movies.map((movie)=>(
              <MovieCard 
              dashboard={true} 
              favorite={true} 
              removeFavoriteMovie={(imdbId)=>this.removeFavoriteMovie(imdbId)}  
              key={movie.imdbID} 
              data={movie} />
            ))}
          </div>
          </>
          : this.state.errors}
        </div>
      }
      </>
    );
  }
}

export default FavoriteMovieContainer;