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
      favoriteMovies: [],
      pageNumber: 1,
      totalResulst: 0,
      errors:[],
      noMoreMovies: false
    }
  }

  //Re-render component if searchMovie value in props changes
  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.searchMovie !== this.props.match.params.searchMovie){
      this.getMovies(this.props.match.params.searchMovie);
    }
    
  }
  
  componentDidMount(){
    // Retreiving user favorite movies if they are logged in
    if(localStorage.getItem('user') != null){
      this.getFavoriteMovies();
    }
    console.log(this.props.match.params.searchMovie);
    this.getMovies();
  }

  getMovies(){
    let movieName = this.props.match.params.searchMovie;
    this.setState({pageNumber: 1, noMoreMovies: false}); //Getting first page of new search
    fetch(`/movies/search?q=${movieName}&p=1`)
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

  getFavoriteMovies(){
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    console.log(loggedUser);
    fetch(`/movies/getFavorites/${loggedUser.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({dataFetched: true});
      if(data.status === 'success'){
        // Creating map with movie ids and whether the user has set it as favorite
        let map = {};
        for(let f of data.data){
          map[f.imdbID] = true;
        }
        this.setState({
          isFavoriteMap: map
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
      fetch(`/movies/search?q=${movieName}&p=${newPageNumber}`)
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
            <MovieCard 
            dashboard={false} 
            favorite={localStorage.getItem('user') != null && this.state.isFavoriteMap[movie.imdbID]} 
            key={movie.imdbID} 
            data={movie} />
          ))}
        </div>
        
        {!this.state.noMoreMovies &&
          <button style={{marginBottom:'50px'}} className="btn btn-outline-secondary" onClick={()=>this.loadMore()}>Load more</button>
        }
        </>
        : this.state.errors}
      </div>
      </>
    );
  }
}

export default MovieCardContainer;