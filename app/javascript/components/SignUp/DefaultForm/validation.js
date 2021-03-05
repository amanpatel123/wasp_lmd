import { ValidationEmail } from '../../Utilities/validations';

export const SignUpValidation = (form) => {
  let error = {};

  const { fullName, email, password, confirmPassword, phone } = form;

  if(!fullName) error.fullName = 'Invalid Input!';
  if(!ValidationEmail(email)) error.email = "Invalid Email!";
  if(!password) error.password = "Invalid password!";
  if(!confirmPassword) error.confirmPassword = "Invalid confirmed password!";
  if(password && confirmPassword && password !== confirmPassword) error.confirmPassword = "Passwords are not matched!";
  if(!phone) error.phone = "Enter phone number!";
 
  return {
    valid: Object.keys(error).length === 0,
    ...error
  }
}