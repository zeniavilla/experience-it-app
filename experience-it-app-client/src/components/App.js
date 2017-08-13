import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Experiences from '../containers/Experiences';
import ExperienceForm from '../containers/ExperienceForm';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <NavBar />

              <Route path="/(experiences|)" component={Experiences} />
              <Route path="/describe-your-experience" component={ExperienceForm} />
          </div>
      </Router>
    );
  }
}

export default App;
