import React, { useState }from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import { SignUpValidation } from '../DefaultForm/validation';

import './DriverForm.scss';

const DriverForm = () => {

  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: '',
    streetName: '',
    streetNumber: '',
    province: '',
    country: '',
    postalCode: ''
  });

  const handleSubmit = (event) => {
    // prevent page from refreshing    
    event.preventDefault();
    setLoading(true);
    // validate the form
    const error = SignUpValidation(form);
    console.log("error", error);
    if(!error.valid){
      setErrors(error);
      setLoading(false);
    } else {
      //TODO: api call with backend to sign up the user
      setLoading(false);
    }
  };

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={8}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={updateForm}
            isInvalid={errors && errors.fullName}
          />
          <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
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
            isInvalid={errors && errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            value={form.password}
            onChange={updateForm}
            isInvalid={errors && errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={updateForm}
            isInvalid={errors && errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={8}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            name="phone"
            value={form.phone}
            onChange={updateForm}
            isInvalid={errors && errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Street Number</Form.Label>
          <Form.Control
            required
            type="text"
            name="streetNumber"
            value={form.streetNumber}
            onChange={updateForm}
            isInvalid={errors && errors.streetNumber}
          />
          <Form.Control.Feedback type="invalid">{errors.streetNumber}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Street Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="streetName"
            value={form.streetName}
            onChange={updateForm}
            isInvalid={errors && errors.streetName}
          />
          <Form.Control.Feedback type="invalid">{errors.streetName}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            name="city"
            value={form.city}
            onChange={updateForm}
            isInvalid={errors && errors.city}
          />
          <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Province</Form.Label>
          <Form.Control
            required
            type="text"
            name="province"
            value={form.province}
            onChange={updateForm}
            isInvalid={errors && errors.province}
          />
          <Form.Control.Feedback type="invalid">{errors.province}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="selectpicker countrypicker"
            as="select"
            required
            type="text"
            name="country"
            value={form.country}
            onChange={updateForm}
            isInvalid={errors && errors.country}
          >
            <option>🇨🇦 Canada</option>
            <option>🇺🇸 US</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={12} md={4}>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            required
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={updateForm}
            isInvalid={errors && errors.postalCode}
          />
          <Form.Control.Feedback type="invalid">{errors.postalCode}</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} xs={12} md={8}>
          <Button className="button" disabled={loading} type="submit">
            Create account
          </Button>
          <span className="agreement">
            By creating an account, you agree to the Term of Service and Privacy Statment. Let us know if you have any conerns regarding our policies.
          </span>
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

export { DriverForm };
