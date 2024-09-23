const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  recommendation: {
    ragas: [String],
    breathingExercises: [String],
    specialFrequencies: [String],
  },
});

module.exports = mongoose.model('Session', SessionSchema);
