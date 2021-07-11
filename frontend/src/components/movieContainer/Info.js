import {Component} from 'react';

class Info extends Component {
  render() { 
    return ( 
      <>
      <div>
        <h3>Movie details</h3>
        <p>Year: {this.props.data.Year}</p>
        <p>Rated: {this.props.data.Rated}</p>
        <p>Country: {this.props.data.Country}</p>
        <p>Genre: {this.props.data.Genre}</p>
        <p>Actors: {this.props.data.Actors}</p>
        <p>Plot: {this.props.data.Plot}</p>
        <p>Awards: {this.props.data.Awards}</p>
        <p>Box Office: {this.props.data.BoxOffice}</p>
        <p>Production: {this.props.data.Production}</p>
      </div>
      <div className='ratings'>
        <h3>Ratings</h3>
        <p>IMDB Rating: {this.props.data.imdbRating} ({this.props.data.imdbVotes} votes)</p>
        
      </div>
      </>
    );
  }
}
 
export default Info;