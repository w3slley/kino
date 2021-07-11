import {Component} from 'react';

class Register extends Component {
  state = {  }
  render() { 
    return (
      <div style={{width:'30%',margin:'100px auto'}} className='container'>
        <form method="post" action="/users/register" className="needs-validation">
          <div className="mb-3">
            <label >Name</label>
            <div className="input-group">
              <input name="name" type="text" className="form-control" placeholder="Username"></input>
            </div>
          </div>
          <div className="mb-3">
            <label >Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input name="username" type="text" className="form-control" placeholder="Username"></input>
              <div className="invalid-feedback" style={{width: '100%'}}>
                Your username is required.
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label>Email <span className="text-muted">(Optional)</span></label>
            <input name="email" type="email" className="form-control" placeholder="you@example.com"></input>
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="mb-3">
            <label>Password </label>
            <input name="password" type="password" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label>Confirm password </label>
            <input name="confirm-password" type="password" className="form-control"></input>
          </div>

          <hr className="mb-4"></hr>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
 
export default Register;