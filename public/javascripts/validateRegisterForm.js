// validateRegisterForm.js
function validateRegisterForm() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
      document.getElementById('error-message').textContent = 'All fields are required.';
      document.getElementById('error-message').style.display = 'block';
      return false;
  }

  // Additional validation logic for username (e.g., minimum length)
  if (username.length < 4) {
    document.getElementById('error-message').textContent = 'Username must be at least 4 characters.';
    document.getElementById('error-message').style.display = 'block';
    return false;
  }

  // Additional validation logic for password (e.g., minimum length)
  if (password.length < 6) {
    document.getElementById('error-message').textContent = 'Password must be at least 6 characters.';
    document.getElementById('error-message').style.display = 'block';
    return false;
  }

  // Additional validation logic for username (e.g., alphanumeric characters only)
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!usernameRegex.test(username)) {
      document.getElementById('error-message').textContent = 'Username can only contain alphanumeric characters.';
      document.getElementById('error-message').style.display = 'block';
      return false;
  }

  // Additional validation logic for password complexity (e.g., at least one uppercase, one lowercase, and one digit)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
      document.getElementById('error-message').textContent = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit.';
      document.getElementById('error-message').style.display = 'block';
      return false;
  }

  // Additional validation logic for email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      document.getElementById('error-message').textContent = 'Invalid email address.';
      document.getElementById('error-message').style.display = 'block';
      return false;
  }

  // Add any other custom validation logic here

  return true;
}
