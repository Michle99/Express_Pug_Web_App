// routes/index.js
import express from 'express';
const router = express.Router();
import fs from 'fs';
import path from 'path'

const images = JSON.parse(fs.readFileSync('images.json', 'utf-8'));

console.log("Outside router Images: ", images);

router.get('/', (req, res) => {
    res.render('index', { title: 'Model', images: images.imageData });
});

export default router;
