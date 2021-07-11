import {Component} from 'react';

class Trailer extends Component {
  render() { 
    return (
      <div>
        <h3>Trailer</h3>
        <iframe title={this.props.youtubeId} width='600px' height='300px'  src={`https://youtube.com/embed/${this.props.youtubeId}`}></iframe>
      </div>
    );
  }
}
 
export default Trailer;