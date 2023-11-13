const express = require('express');
const router = express.Router();
const data = require('../data/data');


// Initialize data on startup
data.initializeData();


// GET - Display the registration form
router.get('/', (req, res) => {
  res.render('register');
});

// POST - Handle the submission of the registration form
router.post('/', (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  // Check if the username is already taken
  if (data.getUserByUsername(username)) {
    res.render('register', { error: 'Username already taken' });
  } else {
    // @2:57 11/11/23; 
    data.addUser({ firstName, lastName, email, username, password });
    // For example: data.addUser({ username, password: hashedPassword });
    res.redirect('/login');
  }
});

module.exports = router;
