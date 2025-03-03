let emailInput = document.querySelectorAll("#email");
let errorMessage = document.querySelector(".error-message");

const regexEmail = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
    );
};

emailInput[0].addEventListener("change", (e) => {
  e.preventDefault();
  let email = e.target.value;
  let isValid = regexEmail(email);
  if (!isValid) {
    errorMessage.classList.remove('hidden')
  } else {
    errorMessage.classList.add('hidden')
  }
});

