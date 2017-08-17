import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Footer.css';

const Footer = () =>
    <Navbar className="navbar-static-bottom">
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#" title="Developed by Zenia Villa">© Experience It</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem href="https://github.com/zeniavilla/experience-it-app" target="_blank" title="View on GitHub">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

export default Footer;