// backend/routes/therapyRoutes.js
const express = require('express');
const router = express.Router();
const therapyController = require('../controllers/therapyController');
const auth = require('../auth');

// @route   POST api/therapy/recommendation
// @desc    Get therapy recommendation
router.post('/recommendation', auth, therapyController.getTherapyRecommendation);

module.exports = router;