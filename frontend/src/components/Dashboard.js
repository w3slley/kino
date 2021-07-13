import {Component} from 'react';
import FavoriteMovieCardContainer from './FavoriteMovieCardContainer.js';

class Dashboard extends Component {
  state = {  }
  render() { 
    return (
      <section className="mt-5 text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Dashboard</h1>
          <p className="lead text-muted">Here are your favorite movies:</p>
          <FavoriteMovieCardContainer />
        </div>
      </section>
    );
  }
}
 
export default Dashboard;