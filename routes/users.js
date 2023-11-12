// routes/users.js
const express = require('express');
const router = express.Router();
const userData = require('../data/user');

router.get('/', (req, res) => {
    res.render('users', { title: 'Photographers', users: userData });
});

module.exports = router;
