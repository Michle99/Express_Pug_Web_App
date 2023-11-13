// validateRegisterForm.js

function validateRegisterForm() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
      showError('All fields are required.');
      return false;
  }

  // Additional validation logic for username (e.g., minimum length)
  if (username.length < 4) {
    showError('Username must be at least 4 characters.');
    return false;
  }

  // Additional validation logic for password (e.g., minimum length)
  if (password.length < 6) {
    showError('Password must be at least 6 characters.');
    return false;
  }

  // Additional validation logic for username (e.g., alphanumeric characters only)
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!usernameRegex.test(username)) {
      showError('Username can only contain alphanumeric characters.');
      return false;
  }

  // Additional validation logic for password complexity (e.g., at least one uppercase, one lowercase, and one digit)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
      showError('Password must contain at least one uppercase letter, one lowercase letter, and one digit.');
      return false;
  }

  // Additional validation logic for email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      showError('Invalid email address.');
      return false;
  }

  return true;
}

function showError(message) {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = message;
  errorMessageElement.style.display = 'block';
}

function checkIfUserIsRegistered(username) {
  return isUserRegistered(username);
}
// Include this line only if you are using this script in a browser environment
// window.validateRegisterForm = validateRegisterForm;