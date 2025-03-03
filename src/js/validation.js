import { regexEmail, regexPassword } from "./utils";

let errMsgConfirmPw = document.querySelector("#errMsgConfirm");
let passwordInput = document.querySelector("#password");


const validationEmail = (value) => {
  return String(value)
    .toLocaleLowerCase()
    .match(regexEmail());
};

const validationPassword = (value) => {
  return String(value).match(regexPassword());
};

const validationConfirmPassword = (value) => {
  return passwordInput.value === value;
};

export const emailError = (value) => {
  if (value === "") errMsgEmail.textContent = "This field must be filled in";
  else errMsgEmail.textContent = "Must insert a corret email";
  return validationEmail(value);
};

export const passwordError = (value) => {
  if (value === "") errMsgPw.textContent = "This field must be filled in";
  else errMsgPw.textContent = "A password must have at leat 10 characters";
  return validationPassword(value);
};

export const confirmPwError = (value) => {
  if (value === "") errMsgConfirmPw.textContent = "This field must be filled in";
  else errMsgConfirmPw.textContent = "Must be equal to password";
  return validationConfirmPassword(value);
};