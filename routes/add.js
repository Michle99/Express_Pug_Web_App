import express from 'express';
const router = express.Router();
import multer from 'multer' ;
import path from 'path'
import { initializeData, addImage, getImagesData } from '../data/image.js';
import isLoggedIn from '../middlewares/isLoggedIn.js';

// Initialize data on startup
initializeData();

// Set up multer storage configuration for single image upload
const singleImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images'); 
  },
  filename: function (req, file, cb) {
    cb(null, req.body.title + path.extname(file.originalname));
  }
});

// Set up multer storage configuration for multiple image upload
const multipleImagesStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.title  + '_' + file.originalname); 
  }
});

const singleImageUpload = multer({ storage: singleImageStorage });

const multipleImagesUpload = multer({ storage: multipleImagesStorage }).array('images', 5); // Limit to 5 images


// GET - Display the form to add a new image
router.get('/', (req, res) => {
  res.render('addImage');
});


router.post('/single', singleImageUpload.single('image'), (req, res) => {
  const { title } = req.body;
  const imageUrl = `/images/${req.file.filename}`;

  // Update the images array
  const updatedImages = addImage({ id: getImagesData().length + 1, title, url: imageUrl });
  console.log("I added new images:", updatedImages);
  res.redirect('/gallery');
});


router.post('/multiple', (req, res) => {
  multipleImagesUpload(req, res, (err) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    const titles = req.body.titles.split(',').map(title => title.trim());
    const imageUrls = req.files.map(file => `/images/${file.filename}`);

    titles.forEach((title, index) => {
      addImage({ id: getImagesData().length + 1, title, url: imageUrls[index] });
    });

    res.redirect('/gallery');
  });
});

export default router;
