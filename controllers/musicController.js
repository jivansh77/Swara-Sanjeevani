// controllers/musicController.js
const Music = require('../models/Music');
const path = require('path');
const fs = require('fs');

// Upload a new music file
exports.uploadMusic = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const newMusic = new Music({
      title: req.body.title || file.originalname,
      filePath: `/public/music/${file.filename}`,
    });

    await newMusic.save();
    res.json({ msg: 'Music uploaded successfully', music: newMusic });
  } catch (error) {
    console.error('Error uploading music:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all music files
exports.getAllMusic = async (req, res) => {
  try {
    const musicFiles = await Music.find(); // This fetches the music tracks from the database
    if (!musicFiles.length) {
      // If no music files found, send a 404 or a message
      return res.status(404).json({ msg: 'No music files found' });
    }
    res.json(musicFiles); // Send the list of music files as the response
  } catch (error) {
    console.error('Error fetching music:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a music file
exports.deleteMusic = async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);
    if (!music) {
      return res.status(404).json({ msg: 'Music not found' });
    }

    // Delete the file from the server
    const filePath = path.join(__dirname, '..', music.filePath);
    fs.unlinkSync(filePath);

    await music.remove();
    res.json({ msg: 'Music deleted successfully' });
  } catch (error) {
    console.error('Error deleting music:', error);
    res.status(500).json({ error: 'Server error' });
  }
};