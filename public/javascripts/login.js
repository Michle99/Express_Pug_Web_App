// public/javascripts/login.js
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();

        if (result.success) {
          window.location.href = '/gallery';
        } else {
          updateErrorMessage(result.error);
        }
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.log('Fetch error:', error);
      updateErrorMessage('An unexpected error occurred. Please try again.');
    }
  });

  function updateErrorMessage(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
      errorElement.textContent = message;
    } else {
      console.log('Error element not found');
    }
  }
});
