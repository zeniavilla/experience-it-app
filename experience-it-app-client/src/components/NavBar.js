import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar-fixed-top">
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" exact>Experience It</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem><NavLink to="/" exact>Experiences</NavLink></NavItem>
                        <NavItem><NavLink to="/describe-your-experience" exact>Add Experience</NavLink></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;