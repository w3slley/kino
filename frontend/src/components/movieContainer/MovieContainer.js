import React, { Component } from 'react';
import Poster from './Poster.js';
import Info from './Info.js';
import Trailer from './Trailer.js';
import Rating from './Rating.js';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataFetched: false,
      movieData: '',
      errors: []
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
      this.setState({dataFetched: true});
      if(data.Response === 'True'){
        this.setState({movieData: data});
      }
      else if(data.status === 'failed'){
        this.setState({errors: data.message})
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
      <div style={{position:'relative'}} class="container mt-5 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        {!this.state.dataFetched? 
        <Loader 
          type="TailSpin"
          color="#262626" 
          height={80} 
          width={80} 
        />  : ''}
        {this.state.dataFetched && this.state.errors.length === 0 ?
        <div>
          <div>
            <button style={{position:'absolute',left:15,top:-20}} class="btn btn-dark" onClick={()=>this.goBack()}>Go back</button>
            <a style={{float:'right'}} target='_blank' rel="noreferrer" href={`https://imdb.com/title/${this.state.movieData.imdbID}`}><img alt="" style={{width:60}} src='/images/imdb-logo.png'></img></a>
          </div>
          
          <div style={{display:'flex', marginBottom:50}}>
            <Poster url={this.state.movieData.Poster} />
            <Info data={this.state.movieData} />
          </div>
          <Rating data={this.state.movieData} />
          <Trailer youtubeId={this.state.movieData.YoutubeId} />
          
        </div>
        :
        <p>{this.state.errors}</p>
        }
      </div>
    );
  }
}


export default Movie;