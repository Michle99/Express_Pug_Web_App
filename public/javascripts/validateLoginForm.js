// validateLoginForm.js
function validateLoginForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        document.getElementById('error-message').textContent = 'Username and password are required.';
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

    return true;
}
