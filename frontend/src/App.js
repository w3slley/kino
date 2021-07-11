import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from './components/Search.js';
import MovieCardContainer from './components/MovieCardContainer.js';
import MovieContainer from './components/movieContainer/MovieContainer.js';

function App(){
  return (
    <Router>
      <Search />
      <Switch>
        <Route exact path='/search/:searchMovie' component={MovieCardContainer} />
        <Route exact path='/movies/:movieId' component={MovieContainer} />
      </Switch>
    </Router>
  );
}

export default App;
