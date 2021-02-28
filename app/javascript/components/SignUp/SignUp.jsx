import React from 'react'
import { Container } from 'react-bootstrap';
import { Header } from '../Header';

const SignUp = () => {
  return (
    <div>
      <Header hideLinks={true} />

      <Container>
        <h1>Sign up</h1>
      </Container>

    </div>
  )
}

export { SignUp };