import React, { Component } from 'react';

class FavoriteButton extends Component{
  addToFavorite(e){
    e.preventDefault();
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    fetch('/movies/addFavorite',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `title=${this.props.data.Title}&year=${this.props.data.Year}&poster=${this.props.data.Poster}&imdbId=${this.props.data.imdbID}&userId=${loggedUser.id}`
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 'success'){
        console.log(data);
        this.props.toggleFavorite();
      }
      else{
        console.log(data.message);
      }
    });
  }

  removeFromFavorite(e){
    e.preventDefault();
    // If in dashboard, delete component from container
    if(this.props.dashboard){
      this.props.removeFavoriteMovie(this.props.data.imdbID);
    }
    fetch('/movies/removeFavorite',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `imdbID=${this.props.data.imdbID}`
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 'success'){
        console.log(data);
        if(!this.props.dashboard){
          this.props.toggleFavorite();
        }
      }
      else{
        console.log(data.message);
      }
      
    });
  }
  render(){
    return (
      <>
      {this.props.favorite == false  &&
        <button onClick={(e)=>{this.addToFavorite(e)}} className='btn btn-sm btn-success mt-2'>Add to favorite</button>
      }
      {this.props.favorite &&
        <button style={{fontSize:10}} onClick={(e)=>this.removeFromFavorite(e)} className='btn btn-sm btn-danger mt-2'>Remove from favorites</button>
      }
      </>
    )
  }
}

export default FavoriteButton;