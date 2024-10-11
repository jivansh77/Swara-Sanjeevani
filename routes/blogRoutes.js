const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/articles', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        category: 'health',
        apiKey: process.env.VITE_NEWS_API_KEY,
      },
    });

    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news articles:', error.message);
    res.status(500).json({ message: 'Failed to fetch news articles.' });
  }
});

module.exports = router;