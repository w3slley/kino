import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='navbar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <Link to='/login'>Login</Link><br/>
        <Link to='/register'>Sign up</Link>
      </div>
    );
  }
}
 
export default Navbar;