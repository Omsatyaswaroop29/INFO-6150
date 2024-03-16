document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("reset").addEventListener("click", clearFormLoader);
  document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();
      if (formValidation(this)) {
          formLogin();
      }
  });
});

const formValidation = (form) => {
  return (
      isUsernameEmpty(form.username, "Username is required!", document.getElementById('usernameValidation')) &&
      isPasswordValid(form.password, "Please enter a valid Password (9 or more characters)!", document.getElementById('passwordValidation')) &&
      isPasswordMatching(form.password, form.confirmPassword, "Passwords do not match!", document.getElementById('confirmPasswordValidation')) &&
      isEmailValid(form.email, "Please enter a valid northeastern email!", document.getElementById('emailValidation'))
  );
};

const isUsernameEmpty = (usrName, errMessage, usernameValidation) => {
  var checkUsername = (usrName.value.trim() !== "");
  if (checkUsername) {
      clearError(usernameValidation, usrName);
  } else {
      displayError(usernameValidation, usrName, errMessage);
  }
  return checkUsername;
};

const isPasswordValid = (password, errMessage, passwordValidation) => {
  const isValid = /^\w{9,}$/.test(password.value.trim());
  if (isValid) {
      clearError(passwordValidation, password);
  } else {
      displayError(passwordValidation, password, errMessage);
  }
  return isValid;
};

const isPasswordMatching = (password, confirmPassword, errMessage, confirmPasswordValidation) => {
  const isMatch = password.value.trim() === confirmPassword.value.trim();
  if (isMatch) {
      clearError(confirmPasswordValidation, confirmPassword);
  } else {
      displayError(confirmPasswordValidation, confirmPassword, errMessage);
  }
  return isMatch;
};

const isEmailValid = (email, errMessage, emailValidation) => {
  var checkEmail = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/.test(email.value.trim());
  if (checkEmail) {
      clearError(emailValidation, email);
  } else {
      displayError(emailValidation, email, errMessage);
  }
  return checkEmail;
};

const formLogin = () => {
  sessionStorage.setItem("user", document.getElementById('username').value);
  window.location.href = "calculator.html";
};

const clearFormLoader = () => {
  var elements = document.querySelectorAll('.errorBox');
  elements.forEach(element => {
      element.classList.remove("errorBox");
  });

  elements = document.querySelectorAll('[id$="Validation"]');
  elements.forEach(element => {
      element.innerHTML = "";
  });

  document.getElementById("username").focus();
};

const clearError = (validationElement, inputElement) => {
  if (validationElement) {
      validationElement.innerHTML = "";
  }
  if (inputElement) {
      inputElement.classList.remove('errorBox');
  }
};

const displayError = (validationElement, inputElement, message) => {
  if (validationElement && message) {
      validationElement.innerHTML = message;
  }
  if (inputElement && inputElement !== document.activeElement) {
      inputElement.classList.add('errorBox');
      inputElement.focus();
  }
};