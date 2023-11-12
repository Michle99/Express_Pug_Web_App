const express = require('express');
const router = express.Router();
const images = require('../data/image');

// GET - Display the image gallery
router.get('/', (req, res) => {
  res.render('gallery', { title: 'Model', images });
});

module.exports = router;
