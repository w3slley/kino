import {Component} from 'react';

class Info extends Component {
  render() { 
    return ( 
      <div style={{width:'70%', marginLeft:'80px',textAlign:'left'}}>
        <h1>{this.props.data.Title}</h1>
        <p>{this.props.data.Plot}</p>
        <p><b>Release date:</b> {this.props.data.Released}</p>
        <p><b>Rated:</b> {this.props.data.Rated}</p>
        <p><b>Country:</b> {this.props.data.Country}</p>
        <p><b>Genre:</b> {this.props.data.Genre}</p>
        <p><b>Director:</b> {this.props.data.Director}</p>
        <p><b>Writer:</b> {this.props.data.Writer}</p>
        <p><b>Actors:</b> {this.props.data.Actors}</p>
        <p><b>Awards:</b> {this.props.data.Awards}</p>
        <p><b>Box Office:</b> {this.props.data.BoxOffice}</p>
        <p><b>Production:</b> {this.props.data.Production}</p>
      </div>
    );
  }
}
 
export default Info;