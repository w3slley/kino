import {Component} from 'react';

class Info extends Component {
  state = {
    icons: {'Internet Movie Database':'imdb-logo.png',
    'Rotten Tomatoes':'rotten-tomatoes-logo.png',
    'Metacritic':'metacritic-icon.svg'
  }
  }
  render() { 
    return ( 
      <div style={{width:'70%', marginLeft:'80px',textAlign:'left'}}>
        <h1>{this.props.data.Title}</h1>
        <p>{this.props.data.Plot}</p>
        <p><b>Release date:</b> {this.props.data.Released}</p>
        <p><b>Rated:</b> {this.props.data.Rated}</p>
        <p><b>Country:</b> {this.props.data.Country}</p>
        <p><b>Genre:</b> {this.props.data.Genre}</p>
        <p><b>Actors:</b> {this.props.data.Actors}</p>
        <p><b>Awards:</b> {this.props.data.Awards}</p>
        <p><b>Box Office:</b> {this.props.data.BoxOffice}</p>
        <p><b>Production:</b> {this.props.data.Production}</p>

        <div className='mx-auto' style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>
          {this.props.data.Ratings !== undefined && 
            this.props.data.Ratings.map((rating)=>(
              <div className='text-center mr-5 ml-5 mt-2'>
                <h3>{rating.Value}</h3>
                <img style={{width:80}} alt="" src={`/images/${this.state.icons[rating.Source]}`}></img>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
 
export default Info;