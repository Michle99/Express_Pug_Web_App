// routes/images.js
const express = require('express');
const router = express.Router();
const images = require('../images.json');

router.get('/', (req, res) => {
    res.render('images', { title: 'Images', images: images.imageData });
});

module.exports = router;
