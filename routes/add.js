const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getImages, addImage } = require('../data/image');
const isLoggedIn = require('../middlewares/isLoggedIn');

// Set up multer storage configuration for single image upload
const singleImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, req.body.title + path.extname(file.originalname)); // Use current timestamp as the filename
  }
});

// Set up multer storage configuration for multiple image upload
const multipleImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, req.body.title  + '_' + file.originalname); // Use current timestamp + original filename
  }
});

// Set up multer middleware for single image upload
const singleImageUpload = multer({ storage: singleImageStorage });

// Set up multer middleware for multiple image upload
const multipleImagesUpload = multer({ storage: multipleImagesStorage }).array('images', 5); // Limit to 5 images

// Mock images array for demonstration purposes
const images = [];

// Testing adding new Images. 
// console.log("Images Upload array stuff:", addImage( { id: 14, title: 'kate Upona', url: '/images/pexels-kate-photo.jpg'}));

// GET - Display the form to add a new image
router.get('/', isLoggedIn, (req, res) => {
  res.render('addImage');
});

// POST - Handle the submission of the new single image form
router.post('/single', singleImageUpload.single('image'), (req, res) => {
  const { title } = req.body;
  const imageUrl = `/images/${req.file.filename}`;

  // Update the images array
  const updatedImages = addImage({ id: getImages().length + 1, title, url: imageUrl });
  console.log("I added new images:", updatedImages);
  res.redirect('/gallery');
});

// POST - Handle the submission of the new multiple images form
router.post('/multiple', (req, res) => {
  multipleImagesUpload(req, res, (err) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }

    // split titles into an array
    const titles = req.body.titles.split(',').map(title => title.trim());
    const imageUrls = req.files.map(file => `/images/${file.filename}`);

    // Update the images array
    titles.forEach((title, index) => {
      addImage({ id: getImages().length + 1, title, url: imageUrls[index] });
    });

    res.redirect('/gallery');
  });
});

module.exports = router;
