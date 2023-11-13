const express = require('express');
const router = express.Router();
const images = require('../data/image');
const isLoggedIn = require('../middlewares/isLoggedIn')

// Apply the middleware to the routes you want to protect
// router.use(isLoggedIn);

// GET - Display the image gallery
router.get('/', (req, res) => {
  res.render('gallery', { title: 'Model', images });
});

module.exports = router;
