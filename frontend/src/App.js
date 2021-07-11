import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Search from './components/Search.js';
import MovieContainer from './components/MovieContainer.js';
import Movie from './components/Movie.js';



function App(){
  return (
    <Router>
      <Search />
      <Switch>
        <Route exact path='/search/:searchMovie' component={MovieContainer} />
        <Route exact path='/movies/:movieId' component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
