import React, { useState }from 'react'
import { Container, Form } from 'react-bootstrap';
import { Header } from '../Header';

import { DefaultForm } from './DefaultForm';
import './SignUp.scss';

const SignUp = () => {

  return (
    <div>
      <Header hideLinks={true} />

      <div className="signup-content">
        <Container className="Container justify-content-xs-center">   
          <div className="title-box">
            <p className="title-one">Get Your Delivery Done</p>
            <h1 className="title-two">Create Your Account</h1> 
          </div>    
         <DefaultForm />
        </Container>
      </div>
    </div>
  )
}

export { SignUp };