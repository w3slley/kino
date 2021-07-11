import {Component} from 'react';

class Poster extends Component {
  render() { 
    return ( 
      <div>
        <img width="200px" src={this.props.url} alt=""></img>
      </div>
     );
  }
}
 
export default Poster;