const express = require('express');
const session = require('express-session');
const router = express.Router();
const data = require('../data/data');

// Use express-session middleware
router.use(session({
  secret: 'yosecret',
  resave: false,
  saveUninitialized: true,
}));

// Parse application/x-www-form-urlencoded data
router.use(express.urlencoded({ extended: true }));

// GET - Display the login form
router.get('/', (req, res) => {
  res.render('login');
});

// POST - Handle the submission of the login form
router.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = data.getUserByUsername(username);

  if (user && user.password === password) {
    // Set User information in session
    req.session.user = user;
    res.redirect('/gallery');
  } else {
    res.render('login', { error: 'Invalid username or password' });
  }
});

module.exports = router;
