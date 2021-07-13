import {Component} from 'react';

class Login extends Component {
  state = { 
    email: '',
    password: '',
    loginError: ''
   }
  sendRequest(e){
    e.preventDefault();
    fetch('/users/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:`email=${this.state.email}&password=${this.state.password}`
    })
    .then(response => response.json())
    .then(data =>{
      if(data.status === 'success'){
        localStorage.setItem('user', JSON.stringify({
          'id': data.user.id,
          'name':data.user.name,
          'username':data.user.username,
          'email':data.user.email
        }));
        window.location = '/dashboard';
      }
      else{
        this.setState({loginError: data.message});
      }
    });
  }
  render() { 
    return (
      <div style={login}>
        <form onSubmit={(e)=>this.sendRequest(e)}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-group">
            <label className="sr-only">Email address</label>
            <input onKeyUp={(e)=>this.setState({email: e.target.value,loginError:''})} className="mt-5 mb-3" type="email" className="form-control" placeholder="Email address" required></input>
          </div>
          <div className="form-group">
            <label className="sr-only">Password</label>
            <input onKeyUp={(e)=>this.setState({password: e.target.value,loginError:''})} className="mt-5 mb-3" type="password" className="form-control" placeholder="Password" required></input>
          </div>
          <span style={{color: 'red'}}>{this.state.loginError}</span><br></br>
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