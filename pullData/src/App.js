import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Comments from './Comments';
import Source from './Source';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route> 
            <Route path="/source">
              <Source />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
