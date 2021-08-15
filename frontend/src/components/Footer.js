import {Component} from 'react';

class Footer extends Component {
  state = {  }
  render() { 
    return (
      <footer style={{display:'flex',alignItems:'center',justifyContent:'center',height:50,margin:'20px 0 0 0',backgroundColor: '#262626',position:'absolute',bottom:0,width:'100%'}}>
        <p style={{margin:0,color: 'white'}}>Made with ❤️ by <a target='_blank' rel="noreferrer" href='https://w3slley.github.io'>w3slley</a>. © 2021</p>
      </footer>
    );
  }
}
 
export default Footer;