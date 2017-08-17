import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './NavBar.css';

const CategoriesNav = props => {
    return (
        <div>
            <Navbar className="categories-nav">
                <Nav>
                    <NavDropdown eventKey={1} title="Categories" id="categories-dropdown">
                        <MenuItem>
                        </MenuItem>
                    </NavDropdown>
                    {['All', 'Arts', 'Entertainment', 'Food & Drink', 'Lifestyle', 'Nature', 'Social Impact', 'Technology', 'Business', 'Fashion', 'History', 'Music', 'Nightlife', 'Sports', 'Wellness'].map(category => {
                        return <NavLink to={`/experiences/category/${category}`}>{category}</NavLink>
                        })
                    }
                </Nav>
            </Navbar>
        </div>
    )
}

export default CategoriesNav;