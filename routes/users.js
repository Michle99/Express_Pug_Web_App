// routes/users.js
const express = require('express');
const router = express.Router();
const userData = require('../data/user');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', isLoggedIn, (req, res) => {
    const user = req.session.user;
    res.render('users', { title: 'Photographers', users: userData, user });
});

module.exports = router;
