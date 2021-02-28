import React, { useState }from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap';
import { Header } from '../Header';

import { DefaultForm } from './DefaultForm';
import './SignUp.scss';

const SignUp = () => {

  const [isDriver, setIsDriver] = useState(false);

  const handleSwitch = (e) => {
    setIsDriver(e.target.checked);
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
          <Form className="driver">
            <Form.Row className="justify-content-center">
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Are you a driver?"
                onChange={handleSwitch}
                className="check"
              />
            </Form.Row> 
          </Form>

          <DefaultForm />
        </Container>
      </div>

    </div>
  )
}

export { SignUp };