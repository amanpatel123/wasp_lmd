export const ValidationPhone = (input) => {
  const is = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
  return is.test(input.toString().trim().toLowerCase())
}

// validate Canada and US postal codes
export const ValidationPostalCode = (input) => {
  const isPostalCode = new RegExp(/[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/);
  return isPostalCode.test(input.toString().trim().toLowerCase());
}

export const ValidationEmail = (input) => {
  const isEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return isEmail.test(input.toString().trim().toLowerCase());
}