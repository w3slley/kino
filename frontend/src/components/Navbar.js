import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {  }
  logout(e){
    console.log('logout');
    e.preventDefault();
    localStorage.removeItem('user');
    window.location = '/';
  }

  render() { 
    return ( 
      <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow ">
        <Link to='/' ><img style={{width: 50}} alt="" src="/images/logo.svg"></img></Link>
        <p style={{fontFamily:'sans-serif', fontSize:30, cursor:'default'}} className="ml-1 my-0 mr-md-auto font-weight-normal">Kino</p>
        <nav className="my-2 my-md-0 mr-md-3 ">
        {localStorage.getItem('user')==null ?
          <Link className='p-2 text-dark' to='/'>Home</Link>
        : <Link className='p-2 text-dark' to='/dashboard'>Dashboard</Link>
        }
          <Link className='p-2 text-dark' to='/search'>Search</Link>
        </nav>
        {localStorage.getItem('user')==null?
        <>
          <Link className='p-2 text-dark mr-2' to='/login'>Login</Link>
          <Link className='btn btn-outline-primary' to='/register'>Register</Link>
        </>
        : 
        <>
          <Link className='p-2 text-dark mr-2' to='/profile'>Profile</Link>
          <button onClick={(e)=>this.logout(e)} className='btn btn-outline-danger'>Logout</button>
        </>
        }
      
      </div>
      </>
    );
  }
}
 
export default Navbar;