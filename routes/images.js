// routes/images.js
const express = require('express');
const router = express.Router();
const imagesData = require('../data/image');

router.get('/', (req, res) => {
    res.render('images', { title: 'Images', images: imagesData });
});

module.exports = router;
