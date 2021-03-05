import { ValidationEmail } from '../Utilities/validations';

export const RequestValidation = (form) => {
  let error = {};

  const { fullName, email, password, confirmPassword, phone, streetName, streetNumber, province, country, postalCode, city } = form;

  if(!fullName) error.fullName = 'Invalid Input!';
  if(!ValidationEmail(email)) error.email = "Invalid Email!";
  if(!password) error.password = "Invalid password!";
  if(!confirmPassword) error.confirmPassword = "Invalid confirmed password!";
  if(password && confirmPassword && password !== confirmPassword) error.confirmPassword = "Passwords are not matched!";
  if(!phone) error.phone = "Enter phone number!";
  if(!streetName) error.streetName = "Invalid street name!";
  if(!streetNumber) error.streetNumber = "Invalid street number!";
  if(!postalCode) error.postalCode = "Invalid postal code!";
  if(!province) error.province = "Select a province!";
  if(!city) error.city = "Enter a city!";

  return {
    valid: Object.keys(error).length === 0,
    ...error
  }
}