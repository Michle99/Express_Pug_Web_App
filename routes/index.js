// routes/index.js
const express = require('express');
const router = express.Router();
const images = require('../images.json')

console.log("Outside router Images: ", images);

router.get('/', (req, res) => {
    res.render('index', { title: 'Model', images: images.imageData });
});

module.exports = router;
