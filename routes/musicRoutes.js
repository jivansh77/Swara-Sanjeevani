// routes/musicRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadMusic, getAllMusic, deleteMusic } = require('../controllers/musicController');

// Configure Multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/music');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// @route POST /api/music/upload
// @desc  Upload a new music file
router.post('/upload', upload.single('music'), uploadMusic);

// @route GET /api/music
// @desc  Get all music files
router.get('/', getAllMusic);

// @route DELETE /api/music/:id
// @desc  Delete a music file
router.delete('/:id', deleteMusic);

module.exports = router;