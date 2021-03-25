import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useCurrentUserQuery } from '../../data/queries';


import './Header.scss';

const Header = ({hideLinks = false, showDashboard}) => {
  const { data, loading: queryLoading } = useCurrentUserQuery();
  if (!queryLoading){
    console.log(data.currentUser);
    console.log(showDashboard);
  }
  const history = useHistory();

  return (
    <div className={ !hideLinks ? "header" : "header-dark" }>
    {
      !hideLinks ? 
        <Navbar collapseOnSelect expand="sm">
          <Navbar.Brand as={Link} to="/">Last Mile Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav> 
            <Nav>
              <Nav.Link as={Link} to="/">Research</Nav.Link>
              <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
              {
                queryLoading ? 'Loading' :
                data.currentUser
                ?
                  <>
                  <Nav.Link as={Link} to="/Dashboard">
                    Dashboard
                  </Nav.Link>
                  <>Welcome, {data.currentUser.fullName}!</>
                  </>
                
                :
                <React.Fragment>
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Sign up
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Dashboard">
                   Dashboard
                  </Nav.Link>
                </React.Fragment>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      :
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Last Mile Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav> 
            {
              showDashboard?
              <React.Fragment>
      
                <Nav>
                 <Button id="button" size="sm" onClick={() => history.push('/Request')}>
                    Make A Request
                  </Button> 
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                </Nav>

              </React.Fragment>

              :
              <Nav>
                <Nav.Link as={Link} to="/">Back</Nav.Link>
              </Nav>
            }

          </Navbar.Collapse>
        </Navbar>
    }

    </div>
  )
}

export { Header };
