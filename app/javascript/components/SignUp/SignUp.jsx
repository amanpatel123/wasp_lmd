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
        <Container className="Container justify-content-md-center">   
          <div className="title">
            <h1>Register</h1> 
          </div>    
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="John"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="validationCustom01">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Wick"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="me@gmail.com"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="validationCustom01">
                <Form.Label>Confirm Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="me@gmail.com"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs={12} controlId="validationCustom01">
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