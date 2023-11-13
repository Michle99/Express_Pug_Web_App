// routes/users.js
const express = require('express');
const router = express.Router();
const userData = require('../data/user');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', isLoggedIn, (req, res) => {
    res.render('users', { title: 'Photographers', users: userData });
});

module.exports = router;
