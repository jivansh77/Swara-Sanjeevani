// models/Music.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Music schema
const MusicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Music', MusicSchema);