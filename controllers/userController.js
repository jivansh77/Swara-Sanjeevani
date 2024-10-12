// backend/controllers/userController.js
const Session = require('../models/Session');

exports.getUserSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id }).sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getLatestSession = async (req, res) => {
  try {
    const latestSession = await Session.findOne({ user: req.user.id }).sort({ date: -1 });

    if (!latestSession) {
      return res.status(404).json({ msg: 'No recommendations available. Please chat with Swara first.' });
    }

    res.json(latestSession);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ msg: 'Session not found' });
    }

    // Check if the session belongs to the authenticated user
    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Authorization denied' });
    }

    await session.deleteOne();

    res.json({ msg: 'Session removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Session not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ msg: 'Session not found' });
    }

    // Check if the session belongs to the authenticated user
    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Authorization denied' });
    }

    res.json(session);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Session not found' });
    }
    res.status(500).send('Server Error');
  }
};