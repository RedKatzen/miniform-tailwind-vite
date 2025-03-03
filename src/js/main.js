import { formatPhone } from "./utils";
import { emailError, passwordError, confirmPwError } from "./validation";

let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let passwordInput = document.querySelector("#password");
let confirmPwInput = document.querySelector("#confirmPw");

let errMsgEmail = document.querySelector("#errMsgEmail");
let errMsgPw = document.querySelector("#errMsgPw");
let errMsgConfirmPw = document.querySelector("#errMsgConfirm");

emailInput.addEventListener("change", (e) => {
  let email = e.target.value;
  let isValid = emailError(email);
  if (!isValid) errMsgEmail.classList.remove("hidden");
  else errMsgEmail.classList.add("hidden");
});

phoneInput.addEventListener("input", (e) => {
  e.target.value = formatPhone(e.target.value);
});

passwordInput.addEventListener("change", (e) => {
  let password = e.target.value;
  let isValid = passwordError(password);
  if (!isValid) errMsgPw.classList.remove("hidden");
  else errMsgPw.classList.add("hidden");
});

confirmPwInput.addEventListener("change", (e) => {
  let confirmPw = e.target.value
  let isValid = confirmPwError(confirmPw);
  if (!isValid) errMsgConfirmPw.classList.remove("hidden");
  else errMsgConfirmPw.classList.add("hidden");
});