import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './App.css';
import Experiences from '../containers/Experiences';
import ExperienceForm from '../containers/ExperienceForm';
import ExperienceShow from '../containers/ExperienceShow';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            {/* Brand navbar  */}
            <Navbar className="brand-navbar">
              <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/" exact>Experience It</NavLink>
              </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                <NavItem><NavLink to="/" exact>Experiences</NavLink></NavItem>
                <NavItem><NavLink to="/describe-your-experience" exact>Add Experience</NavLink></NavItem>
              </Nav>
            </Navbar>

            <Navbar>
              <Nav>
                <NavDropdown eventKey={1} title="Categories" id="categories-dropdown">
                  <MenuItem></MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>

            <Switch>
              <Route path="/(experiences|)" component={Experiences} />
              <Route path="/describe-your-experience" component={ExperienceForm} />
              <Route path="/experiences/:id" component={ExperienceShow} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
