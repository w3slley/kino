import {Component} from 'react';

class Rating extends Component {
  state = {
    icons: {'Internet Movie Database':'imdb-logo.png',
    'Rotten Tomatoes':'rotten-tomatoes-logo.png',
    'Metacritic':'metacritic-icon.svg'
   }
  }
  render() { 
    return (
      <div className='mx-auto mb-5' style={{display: 'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {this.props.data.Ratings !== undefined && 
          this.props.data.Ratings.map((rating)=>(
            <div className='text-center mr-5 ml-5 mt-2'>
              <h3>{rating.Value}</h3>
              <img style={{width:80}} alt="" src={`/images/${this.state.icons[rating.Source]}`}></img>
            </div>
          ))
        }
      </div>
    );
  }
}
 
export default Rating;