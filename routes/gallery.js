const express = require('express');
const router = express.Router();
const images = require('../data/image');
const isLoggedIn = require('../middlewares/isLoggedIn')

// GET - Display the image gallery
router.get('/', isLoggedIn, (req, res) => {
  res.render('gallery', { title: 'Model', images });
});

module.exports = router;
