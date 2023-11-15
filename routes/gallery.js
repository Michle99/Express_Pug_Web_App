const express = require('express');
const router = express.Router();
// const images = require('../data/image');
const images = require('../images.json');
const isLoggedIn = require('../middlewares/isLoggedIn')

// Apply the middleware to the routes you want to protect
// router.use(isLoggedIn);

// GET - Display the image gallery
router.get('/', (req, res) => {
  const user = req.session.user;

  res.render('gallery', { title: 'Model', images: images.imageData, user });
});

module.exports = router;
