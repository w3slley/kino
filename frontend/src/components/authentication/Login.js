import {Component} from 'react';

class Login extends Component {
  state = {  }
  render() { 
    return (
      <div style={login}>
        <form method="POST" action="/user/login">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-group">
            <label className="sr-only">Email address</label>
            <input className="mt-5 mb-3" type="email" className="form-control" placeholder="Email address"></input>
          </div>
          <div className="form-group">
            <label className="sr-only">Password</label>
            <input className="mt-5 mb-3" type="password" className="form-control" placeholder="Password" ></input>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
const login = {
  padding: 20,
  width: '30%',
  margin: '100px auto'
}
 
export default Login;