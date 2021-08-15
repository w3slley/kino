import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Search from './components/Search.js';
import Navbar from './components/Navbar.js';
import Login from './components/authentication/Login.js';
import Register from './components/authentication/Register.js';
import Welcome from './components/Welcome.js';
import Dashboard from './components/Dashboard.js';
import Profile from './components/Profile.js';
import MovieCardContainer from './components/MovieCardContainer.js';
import MovieContainer from './components/movieContainer/MovieContainer.js';
import Footer from './components/Footer.js';

function App(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        {localStorage.getItem('user')!=null &&
         <Route path='/profile' component={Profile} />
        }

        <Route path='/search'>
          <Search />
          <Route path='/search/:searchMovie' component={MovieCardContainer} />
        </Route>
        <Route exact path='/title/:movieId' component={MovieContainer} />
        
        {localStorage.getItem('user')==null ? 
        <>
        <Route path='/' component={Welcome} />
        <Redirect from='/dashboard' to='/' />
        </>
        : 
        <>
        <Route path='/dashboard' component={Dashboard} />
        <Redirect from='/' to='/dashboard' />
        </>
        }
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
