// server.js
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

require('dotenv').config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:3001', // Update this to your frontend's URL
    credentials: true,
  })
);

// Serve static files from 'public'
app.use('/public', express.static('public'));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/therapy', require('./routes/therapyRoutes'));
app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/music', require('./routes/musicRoutes')); // Add music routes

// Define PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));