import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from './components/Search.js';
import Navbar from './components/Navbar.js';
import Login from './components/authentication/Login.js';
import Register from './components/authentication/Register.js';
import About from './components/About.js';
import Welcome from './components/Welcome.js';
import MovieCardContainer from './components/MovieCardContainer.js';
import MovieContainer from './components/movieContainer/MovieContainer.js';

function App(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
        <Route path='/search'>
          <Search />
          <Route path='/search/:searchMovie' component={MovieCardContainer} />
        </Route>
        <Route exact path='/movies/:movieId' component={MovieContainer} />
        <Route path='/' component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
