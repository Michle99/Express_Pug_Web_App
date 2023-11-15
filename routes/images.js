// routes/images.js
import express from 'express';
const router = express.Router();
const images = require('../images.json');

router.get('/', (req, res) => {
    res.render('images', { title: 'Images', images: images.imageData });
});

export default router;
