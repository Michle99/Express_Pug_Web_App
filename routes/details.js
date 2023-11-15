import express from 'express';
const router = express.Router();
import imageDetails  from '../data/imageDetails.js';
import fs from 'fs';

const images = JSON.parse(fs.readFileSync('images.json', 'utf-8'));

// GET - Display details for a specific image
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const image = images.imageData.find(img => img.id === id);
  const details = imageDetails.find(detail => detail.id === id);

  if (!image || !details) {
    res.render('details', { error: 'Image Details not found!' });
  }
  res.render('details', { title: 'Poem', image, details });
});

export default router;
