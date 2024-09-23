// backend/controllers/therapyController.js
const User = require('../models/Users');
const Session = require('../models/Session');

exports.getTherapyRecommendation = async (req, res) => {
  const { stressLevel, mood, preferredInstrument, sleepQuality } = req.body;

  try {
    // Assuming you have logic to generate recommendations based on questionnaire
    const recommendations = generateRecommendations(stressLevel, mood, preferredInstrument, sleepQuality);

    // Create a new session
    const newSession = new Session({
      user: req.user.id,
      recommendation: recommendations,
    });

    await newSession.save();

    const user = await User.findById(req.user.id);
    user.therapySessions.push(newSession.id);
    await user.save();

    res.json(recommendations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Dummy function for generating recommendations
const generateRecommendations = (stressLevel, mood, instrument, sleepQuality) => {
  // Implement your recommendation logic here
  return {
    ragas: ['Raga Yaman', 'Raga Bhairavi'],
    breathingExercises: ['Anulom Vilom', 'Kapalbhati'],
    specialFrequencies: ['Alpha Waves 20'],
  };
};
