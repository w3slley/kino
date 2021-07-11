import {Component} from 'react';

class Trailer extends Component {
  render() { 
    return (
      <div>
        <h1>Trailer</h1>
        <iframe style={{border: 'none'}} title={this.props.youtubeId} width='80%' height='500px'  src={`https://youtube.com/embed/${this.props.youtubeId}`}></iframe>
      </div>
    );
  }
}
 
export default Trailer;