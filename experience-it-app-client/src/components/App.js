import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Experiences from '../containers/Experiences';
import ExperienceForm from '../containers/ExperienceForm';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Switch>
              <Route path="/(experiences|)" component={Experiences} />
              <Route path="/describe-your-experience" component={ExperienceForm} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
