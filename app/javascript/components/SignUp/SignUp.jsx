import React, { useState }from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap';
import { Header } from '../Header';
import { SignUpValidation } from './validation';

import './SignUp.scss';

const SignUp = () => {

  const [validated, setValidated] = useState(false);
  const [form, setForm]           = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (event) => {
    const error = SignUpValidation(form);
    event.preventDefault();
  };

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <Header hideLinks={true} />

      <div className="signup-content">
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
                  name="fullName"
                  value={form.fullName}
                  onChange={updateForm}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={updateForm}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={updateForm}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={8}>
                <Button className="button" disabled={!true} type="submit">
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