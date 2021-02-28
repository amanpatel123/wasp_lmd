export const LoginValidation = (form) => {
  let error = {};

  const { email, password} = form;

  if(!email) error.email = "Invalid Email!";
  if(!password) error.password = "Invalid password!";

  return {
    valid: Object.keys(error).length === 0,
    ...error
  }
}