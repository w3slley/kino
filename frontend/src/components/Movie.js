import React, { Component } from 'react';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
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
    .then(data => this.setState({data: JSON.stringify(data)}));
  }

  render() { 
    return ( 
      <div>
        {this.state.data}
      </div>
    );
  }
}


export default Movie;