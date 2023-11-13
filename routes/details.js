const express = require('express');
const router = express.Router();
const imageDetails = require('../data/imageDetails');
const images = require('../data/image');

// GET - Display details for a specific image
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const image = images.getImages().find(img => img.id === id);
  const details = imageDetails.find(detail => detail.id === id);

  if (!image || !details) {
    res.render('details', { error: 'Image Details not found!' });
  }
  res.render('details', { title: 'Poem', image, details });
});

module.exports = router;
