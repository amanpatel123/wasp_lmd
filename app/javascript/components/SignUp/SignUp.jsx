import React, { useState }from 'react'
import { Container, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { Header } from '../Header';

import './SignUp.scss';

const SignUp = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Header hideLinks={true} />

      <div className="main-content">
        <Container className="Container justify-content-xs-center">   
          <div className="title-box">
            <p className="title-one">Get Your Delivery Done</p>
            <h1 className="title-two">Create Your Account</h1> 
          </div>    
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="John"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Wick"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="me@gmail.com"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Confirm Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="me@gmail.com"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="255-255-2555"
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </div>

    </div>
  )
}

export { SignUp };