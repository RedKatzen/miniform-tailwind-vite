let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let passwordInput = document.querySelector("#password");
let confirmPwInput = document.querySelector("#confirmPw");

let errorMessage = document.querySelector(".error-message");

const regexEmail = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
    );
};

emailInput.addEventListener("change", (e) => {
  e.preventDefault();
  let email = e.target.value;
  let isValid = regexEmail(email);
  if (!isValid) {
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
  }
});

phoneInput.addEventListener("input", (e) => {
  e.preventDefault();
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
