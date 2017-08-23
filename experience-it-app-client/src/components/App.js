import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Experiences from '../containers/Experiences';
import ExperienceNew from '../containers/ExperienceNew';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <div id="wrapper">
              <NavBar />

              <Route path="/(experiences|)" component={Experiences} />
              <Route path="/describe-your-experience" component={ExperienceNew} />
            </div>

            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
