import React from 'react';
import './App.css';
import Home from './Home';
import PastProjects from './PastProjects';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//https://reacttraining.com/react-router/web/example/custom-link
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/past-projects">
            <PastProjects />test
          </Route>
        </Switch>
      </Router>
    </div >
  );
}


export default App;
