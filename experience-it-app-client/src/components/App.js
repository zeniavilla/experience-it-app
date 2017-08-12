import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Experiences from '../containers/Experiences';
import ExperienceForm from '../containers/ExperienceForm';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navbar>
              <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Experience It</a>
              </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                <NavItem eventKey={1} href="/experiences">Experiences</NavItem>
                <NavItem eventKey={2} href="/describe-your-experience">Add Experience</NavItem>
              </Nav>
            </Navbar>

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
