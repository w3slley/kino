import {Component} from 'react';

class Profile extends Component {
  state = { 
    'user':JSON.parse(localStorage.getItem('user'))
   }
  render() { 
    return (
      <section className="mt-5 text-center">
        <div className="container">
          <h1 className="">Profile page</h1>
          {this.state.user !== null && 
          <>
            <p className="text-muted"><b>Name:</b> {this.state.user.name}</p>
            <p className="text-muted"><b>Email:</b> {this.state.user.email}</p>
            <p className="text-muted"><b>Username:</b> {this.state.user.username}</p>
          </>
          }
          
        </div>
      </section>
    );
  }
}
 
export default Profile;