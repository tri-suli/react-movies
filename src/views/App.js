import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App({ service }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home request={service.api.movie.list} />
        </Route>
        <Route path="/:title" children={<Movie request={service.api.movie.findByTitle} />} />
      </Switch>
    </Router>
  );
}

export default App;
