import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow ">
        <img style={{width: 50}} alt="" src="/images/logo.svg"></img>
        <p style={{fontFamily:'sans-serif', fontSize:30}} className="ml-1 my-0 mr-md-auto font-weight-normal">Kino</p>
        <nav className="my-2 my-md-0 mr-md-3 ">
          <Link className='p-2 text-dark' to='/'>Home</Link>
          <Link className='p-2 text-dark' to='/search'>Search</Link>
          <Link className='p-2 text-dark' to='/about'>About</Link>
        </nav>
        <Link className='p-2 text-dark mr-2' to='/login'>Login</Link>
        <Link className='btn btn-outline-primary' to='/register'>Register</Link>
      </div>
      </>
    );
  }
}
 
export default Navbar;