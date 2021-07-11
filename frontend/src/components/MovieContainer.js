import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieData: '',
      movieRatings: []
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.movieId !== this.props.match.params.movieId){
      console.log(this.props.match.params.movieId);
      this.getMovie(this.props.match.params.movieId);
    }
  }
  
  componentDidMount(){
    console.log(this.props.match.params.movieId);
    this.getMovie(this.props.match.params.movieId);
  }

  getMovie(movieId){
    fetch(`http://localhost:8000/movies/${movieId}`)
    .then(response => response.json())
    .then(data => {
      if(data.Response === 'True'){
        this.setState({movieData: data});
        this.setState({movieRatings: data.Ratings});
      }
      else{
        //add error handlers later
      }
    });
  }

  goBack(){ 
    this.props.history.goBack();
  }
  render() { 
    return ( 
      <div>
        <div>
          <img width="200px" src={this.state.movieData.Poster} alt=""></img>
        </div>
        <div>
          <h3>Movie details</h3>
          <p>Year: {this.state.movieData.Year}</p>
          <p>Rated: {this.state.movieData.Rated}</p>
          <p>Genre: {this.state.movieData.Genre}</p>
          <p>Actors: {this.state.movieData.Actors}</p>
          <p>Plot: {this.state.movieData.Plot}</p>
          <p>Awards: {this.state.movieData.Awards}</p>
          <p>Box Office: {this.state.movieData.BoxOffice}</p>
          <p>Production: {this.state.movieData.Production}</p>
          
        </div>
        <div className='ratings'>
          <h3>Ratings</h3>
          <p>IMDB Rating: {this.state.movieData.imdbRating}</p>
          {this.state.movieRatings.map(rating=>(
            <p>{rating.Source}: {rating.Value}</p>
          ))}
        </div>
        <div>
          <h3>Trailer</h3>
          <iframe title={this.state.movieData.YoutubeId} width='600px' height='300px'  src={`https://youtube.com/embed/${this.state.movieData.YoutubeId}`}></iframe>
        </div>
        <a target='_blank' rel="noreferrer" href={`https://imdb.com/title/${this.state.movieData.imdbID}`}>View on IMDB</a>
        <br />
        <button onClick={()=>this.goBack()}>Go back</button>
      </div>
    );
  }
}


export default Movie;