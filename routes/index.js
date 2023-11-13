// routes/index.js
const express = require('express');
const router = express.Router();
const images = require('../data/image.js');

console.log("Outside router Images: ", images);

router.get('/', (req, res) => {
    console.log("Inside get router Images: ", images.length);
    res.render('index', { title: 'Model', images: images.getImages() });
});

module.exports = router;
