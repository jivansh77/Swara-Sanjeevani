// seedMusicData.js

const mongoose = require('mongoose');
const Music = require('./models/Music'); // Adjust the path to your Music model
const connectDB = require('./config/config/dab'); // Adjust the path to your DB connection file

// Connect to the database
connectDB();

// Define some sample music data
const seedMusic = [
  {
    title: 'Raga Bhairav',
    filePath: '/public/music/Raga_Bhairav.mp3', // Path to where your song is stored
  },
  {
    title: 'Raga Yaman',
    filePath: '/public/music/Raga_Yaman.mp3', // Path to where your song is stored
  },
  {
    title: 'Raga Darbari',
    filePath: '/public/music/Raga_Darbari.mp3', // Path to where your song is stored
  },
];

// Function to insert sample data into the Music collection
const seedDB = async () => {
  try {
    // Remove existing entries if you want to start fresh
    await Music.deleteMany();
    console.log('Music collection cleared');

    // Insert seed data
    await Music.insertMany(seedMusic);
    console.log('Music data seeded successfully');

    // Close the database connection
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};

// Execute the seed function
seedDB();