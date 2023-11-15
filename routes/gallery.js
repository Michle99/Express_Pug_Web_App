import express from 'express';
const router = express.Router();
import isLoggedIn from '../middlewares/isLoggedIn.js';

import fs from 'fs';

const images = JSON.parse(fs.readFileSync('images.json', 'utf-8'));
// Apply the middleware to the routes you want to protect
router.use(isLoggedIn);

// GET - Display the image gallery
router.get('/', (req, res) => {
  const user = req.session.user;

  res.render('gallery', { title: 'Model', images: images.imageData, user });
});

export default router;
