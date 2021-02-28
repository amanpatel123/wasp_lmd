import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap';
import DeliveryIcon from '../../assets/icons/last-mile-routing.svg';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Last Mile Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Research</Nav.Link>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="main-content" >
        <section className="box-content">
          <Container>
            <Row>
              <Col className="left-content" xs={12} md={6}>
                <h1 className="phrase">Last Mile Dispatcher</h1>
                <span className="sub-phrase-one">The Best Route Planning Software</span>
                <p className="sub-phrase-two">
                  Start Optimizing your Delivery Route and Schedules
                  <br/> 
                  <br/>
                  Be it the most optimal route, the right fleet mix, or order sequences, our algorithms will come up with it all to ensure a seamless last-mile delivery.
                </p>

                <Button>
                  REQUEST A DEMO
                </Button>
              </Col>
              <Col className="right-content" xs={12} md={6}>
                <img src={DeliveryIcon} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  )
}

export { Home };
