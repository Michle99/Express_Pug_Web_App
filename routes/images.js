// routes/images.js
const express = require('express');
const router = express.Router();
const imagesData = require('../data/image.js');

router.get('/', (req, res) => {
    res.render('images', { title: 'Images', images: imagesData });
});

module.exports = router;
