import {Component} from 'react';

class Trailer extends Component {
  render() { 
    return ( 
      <div style={{width:'30%'}}>
        <img width="100%" src={this.props.url} alt=""></img>
      </div>
     );
  }
}
 
export default Trailer;