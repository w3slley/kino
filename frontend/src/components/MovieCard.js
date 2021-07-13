import React, { Component } from 'react';
import FavoriteButton from './FavoriteButton';
import {Link} from 'react-router-dom';

class MovieCard extends Component {
  state = {
    favorite: (this.props.favorite != undefined)
  }

  toggleFavorite(){
    this.setState((state)=>({favorite: !state.favorite}));
  }
  render() { 
    return ( 
      <div className="col-md-2">
        <div style={{height:'95%'}} className="card mb-4 box-shadow d-flex">
          <div>
           <img style={{width: '100%'}} src={this.props.data.Poster === 'N/A'?'/images/no-img-available.png':this.props.data.Poster} alt=''></img>
          </div>
          <div className="card-body">
            <p className="card-text">{this.props.data.Title} ({this.props.data.Year})</p>
            <div className="text-center ">
              <Link className='btn btn-sm btn-primary' to={`/title/${this.props.data.imdbID}`}>More details</Link>
              {
                localStorage.getItem('user') != null &&
                <FavoriteButton 
                removeFavoriteMovie={(imdbId)=>this.props.removeFavoriteMovie(imdbId)} 
                data={this.props.data} 
                favorite={this.state.favorite} 
                toggleFavorite={()=>this.toggleFavorite()}
                dashboard={this.props.dashboard}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const img={
  width: '200px'
}

export default MovieCard;