// routes/images.js
const express = require('express');
const router = express.Router();
const images = require('../data/image.js');

router.get('/', (req, res) => {
    res.render('images', { title: 'Images', images: images });
});

module.exports = router;
