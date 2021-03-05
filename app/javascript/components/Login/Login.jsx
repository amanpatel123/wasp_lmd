import React, { useState } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Header } from '../Header';
import { LoginValidation } from './validation'; 
import './Login.scss';
const Login = () => {

  const [isDriver, setIsDriver] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [form, setForm]           = useState({
    email: '',
    confirmPassword: ''
  })

  const handleSubmit = (event) => {
    // prevent page from refreshing    
    event.preventDefault();
    setLoading(true);
    // validate the form
    setErrors({});
    const error = LoginValidation(form);

    if(!error.valid){
      setErrors(error);
      setLoading(false);
    } else {

      //TODO: api call with backend to sign up the user
      if(isDriver){
         
      } else {

      }
      setLoading(false);
    }
  };

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  // const handleSwitch = (e) => {
  //   setIsDriver(e.target.checked);
  // }

  return (
    <div>
      <Header hideLinks={true} />

      <div className="signin-content">
        <Container className="Container justify-content-center">   
          <div className="title-box">
            <p className="title-one">Get Your Delivery Done</p>
            <h1 className="title-two">Login</h1> 
          </div>    
          {/* <Form className="driver">
            <Form.Row className="justify-content-center">
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Are you a driver?"
                onChange={handleSwitch}
                className="check"
              />
            </Form.Row> 
          </Form> */}

          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={4}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={form.email || ''}
                  onChange={updateForm}
                  isInvalid={errors && errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={4}>
                <Form.Row>
                  <Form.Label as={Col} xs={6}>Password</Form.Label>
                  <Form.Label as={Col} xs={6} className="d-flex justify-content-end forgot-password"><Link to="/forgot-password">Forgot Password?</Link></Form.Label>
                </Form.Row>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={form.password || ''}
                  onChange={updateForm}
                  isInvalid={errors && errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={4}>
                <Button className="button" disabled={loading} type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} xs={12} md={4}>
                <div className="bottom-box">
                  <span>New to Last Mile?  </span>
                  <Link to="/signup">Create an account</Link>
                </div>
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </div>
    </div>
  )
}

export { Login };
