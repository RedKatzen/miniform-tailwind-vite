let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let passwordInput = document.querySelector("#password");
let confirmPwInput = document.querySelector("#confirmPw");

let errMsgEmail = document.querySelector("#errMsgEmail");
let errMsgPhone = document.querySelector("#errMsgPhone");
let errMsgPw = document.querySelector("#errMsgPw");
let errMsgConfirmPw = document.querySelector("#errMsgConfirm");

// Validation

const validationEmail = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
    );
};

const validationPassword = (password) => {
  return String(password).match(/^.{10,}$/);
};

const validationConfirmPassword = (value) => {
  return passwordInput.value === value;
};

// Input

emailInput.addEventListener("change", (e) => {
  let email = e.target.value;
  let isValid = emailError(email);
  if (!isValid) errMsgEmail.classList.remove("hidden");
  else errMsgEmail.classList.add("hidden");
});

const emailError = (email) => {
  if (email === "") errMsgEmail.textContent = "This field must be filled in";
  else errMsgEmail.textContent = "Must insert a corret email";
  return validationEmail(email);
};

phoneInput.addEventListener("input", (e) => {
  e.target.value = formatPhone(e.target.value);
});

const formatPhone = (phone) => {
  let digits = phone.replace(/\D/g, "").substring(0, 10);
  let regionCode = digits.substring(0, 2);
  let prefix = digits.substring(2, 6);
  let suffix = digits.substring(6, 10);

  let size = digits.length;

  if (size > 6) return `(${regionCode}) ${prefix}-${suffix}`;
  else if (size > 2) return `(${regionCode}) ${prefix}`;
  else if (size > 0) return `(${regionCode})`;

  return "";
};

passwordInput.addEventListener("change", (e) => {
  let password = e.target.value;
  let isValid = passwordError(password);
  if (!isValid) errMsgPw.classList.remove("hidden");
  else errMsgPw.classList.add("hidden");
});

const passwordError = (password) => {
  if (password === "") errMsgPw.textContent = "This field must be filled in";
  else errMsgPw.textContent = "A password must have at leat 10 characters";
  return validationPassword(password);
};

confirmPwInput.addEventListener("change", (e) => {
  let isValid = errorConfirmPassword(e.target.value);
  if (!isValid) errMsgConfirmPw.classList.remove("hidden");
  else errMsgConfirmPw.classList.add("hidden");
});

const errorConfirmPassword = (value) => {
  if (value === "")
    errMsgConfirmPw.textContent = "This field must be filled in";
  else errMsgConfirmPw.textContent = "Must be equal to password";
  return validationConfirmPassword(value);
};
