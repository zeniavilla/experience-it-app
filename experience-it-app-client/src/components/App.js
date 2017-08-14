import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Experiences from '../containers/Experiences';
import ExperienceNew from '../containers/ExperienceNew';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <NavBar />

              <Route path="/(experiences|)" component={Experiences} />
              <Route path="/describe-your-experience" component={ExperienceNew} />
          </div>
      </Router>
    );
  }
}

export default App;
