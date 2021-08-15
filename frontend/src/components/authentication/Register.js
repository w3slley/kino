import {Component} from 'react';

class Register extends Component {
  state = { 
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    registerError: ''
   };

   componentDidMount(){
    document.title = "Register | Kino";
  }

   sendRequest(e){
     e.preventDefault();
     if(this.state.password === this.state.confirmPassword){
      fetch('/users/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`name=${this.state.name}&email=${this.state.email}&username=${this.state.username}&password=${this.state.password}&confirmPassword=${this.state.confirmPassword}`
       })
       .then(response => response.json())
       .then(data => {
         window.location='/login';
        });
     }
     else{
      this.setState({registerError: "Passwords don't match"});
     }
   }

  render() { 
    return (
      <div style={{width:'500px'}} className='container'>
        <h1>Create an account</h1>
        <form onSubmit={(e)=>this.sendRequest(e)} className="needs-validation">
          <div className="mb-3">
            <label >Name</label>
            <div className="input-group">
              <input onKeyUp={(e)=>this.setState({name: e.target.value})} name="name" type="text" className="form-control" placeholder="Username" required></input>
            </div>
          </div>
          <div className="mb-3">
            <label >Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input onKeyUp={(e)=>this.setState({username: e.target.value})} type="text" className="form-control" placeholder="Username" required></input>
              <div className="invalid-feedback" style={{width: '100%'}}>
                Your username is required.
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input onKeyUp={(e)=>this.setState({email: e.target.value})} type="email" className="form-control" placeholder="you@example.com" required></input>
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="mb-3">
            <label>Password </label>
            <input onKeyUp={(e)=>this.setState({password: e.target.value})} name="password" type="password" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label>Confirm password </label>
            <input onKeyUp={(e)=>this.setState({confirmPassword: e.target.value})} name="confirm-password" type="password" className="form-control" required></input>
          </div>
          <span style={{color: 'red'}}>{this.state.registerError}</span><br></br>
          <hr className="mb-4"></hr>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
 
export default Register;