// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../auth');
const userController = require('../controllers/userController');

// @route   GET api/user/sessions
// @desc    Get all sessions for authenticated user
// @access  Private
router.get('/sessions', auth, userController.getUserSessions);
router.get('/sessions/latest', auth, userController.getLatestSession);
router.delete('/sessions/:id', auth, userController.deleteSession);
router.get('/sessions/:id', auth, userController.getSessionById);

module.exports = router;
