const express = require('express');
const router = express.Router();
const images = require('../data/image');
const isLoggedIn = require('../middlewares/isLoggedIn')

// Apply the middleware to the routes you want to protect
// router.use(isLoggedIn);

// GET - Display the image gallery
router.get('/', (req, res) => {
  const user = req.session.user;

  res.render('gallery', { title: 'Model', images: images.getImages(), user });
});

module.exports = router;
