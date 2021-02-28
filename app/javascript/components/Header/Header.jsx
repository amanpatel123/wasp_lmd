import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = ({hideLinks = false}) => {
  console.log("hidelinks", hideLinks)
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand as={Link} to="/">Last Mile Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav> 
          {
            !hideLinks ?
            <Nav>
              <Nav.Link as={Link} to="/signup">Research</Nav.Link>
              <Nav.Link as={Link} to="/signup">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Log In
              </Nav.Link>
            </Nav>
            :
            <Nav>
              <Nav.Link as={Link} to="/" className="close"> </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export { Header };
