const express = require('express');
const router = express.Router();
const data = require('../data/data');
const bcrypt = require('bcrypt');


// Parse application/x-www-form-urlencoded data
router.use(express.urlencoded({ extended: true }));

// GET - Display the login form
router.get('/', (req, res) => {
  console.log('Login route accessed.');
  // Redirect logged-in users to the gallery page
  if (req.session && req.session.user) {
    console.log('Redirecting to /gallery.');
    return res.redirect('/gallery');
  }
  console.log('Rendering login page.');
  res.render('login', { error: req.query.error });
});

// POST - Handle the submission of the login form
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = data.getUserByUsername(username);

  if (user && await bcrypt.compare(password, user.password)) {
    // Set User information in session
    req.session.user = user;
    return res.redirect('/gallery');
  } else {
    res.render('login', { error: 'Invalid username or password' });
  }
});

module.exports = router;
