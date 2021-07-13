import {Component} from 'react';

class Dashboard extends Component {
  state = {  }
  render() { 
    return (
      <section className="mt-5 text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Dashboard</h1>
          <p className="lead text-muted">Show liked movies here!</p>
        </div>
      </section>
    );
  }
}
 
export default Dashboard;