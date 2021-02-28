import React, { useState }from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap';
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
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Button className="button" disabled={!true}>
                  Create account
                </Button>
                <span className="agreement">
                  By creating an account, you agree to the Term of Service and Privacy Statment. Let us know if you have any conerns regarding our policies.
                </span>
              </Form.Group>
            </Form.Row>

          </Form>
        </Container>
      </div>

    </div>
  )
}

export { SignUp };