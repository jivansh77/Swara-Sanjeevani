// frontend/src/pages/Therapy.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer'; // Ensure this component exists

const Therapy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { emotion } = location.state || { emotion: 'neutral' }; // Default to 'neutral' if undefined

  // Function to determine recommendations based on emotion
  const getRecommendations = (emotion) => {
    const recommendationsMap = {
      Excitement: {
        ragas: ['Raga Kedar', 'Raga Hamsadhwani'],
        therapeuticPower: 'Boosts excitement and enthusiasm, enhances focus.',
        breathingExercises: ['Deep Breathing', 'Box Breathing'],
        specialFrequencies: ['528 Hz – Transformation and Miracles'],
      },
      Happiness: {
        ragas: ['Raga Desh', 'Raga Kafi'],
        therapeuticPower: 'Promotes joy, calms the nervous system, and elevates mood.',
        breathingExercises: ['Deep Breathing'],
        specialFrequencies: ['432 Hz – Relaxation and Calmness'],
      },
      Contentment: {
        ragas: ['Raga Yaman', 'Raga Bhimpalasi'],
        therapeuticPower: 'Improves emotional stability, reduces stress, and helps with respiratory disorders.',
        breathingExercises: ['Mindful Breathing'],
        specialFrequencies: ['639 Hz – Harmonizing'],
      },
      Anxiety: {
        ragas: ['Raga Bhairavi', 'Raga Bageshree'],
        therapeuticPower: 'Reduces anxiety, calms nerves, and helps with respiratory and psychiatric issues.',
        breathingExercises: ['Alternate Nostril Breathing'],
        specialFrequencies: ['432 Hz – Relaxation'],
      },
      Sadness: {
        ragas: ['Raga Darbari', 'Raga Desh'],
        therapeuticPower: 'Eases sadness, helps with emotional processing, and aids nervous system-related conditions.',
        breathingExercises: ['Diaphragmatic Breathing'],
        specialFrequencies: ['396 Hz – Guilt and Fear Release'],
      },
      Depression: {
        ragas: ['Raga Malkauns', 'Raga Shivaranjani'],
        therapeuticPower: 'Alleviates deep sadness and helps with psychiatric issues, promotes emotional healing.',
        breathingExercises: ['4-7-8 Breathing'],
        specialFrequencies: ['396 Hz – Emotional Healing'],
      },
      Neutral: {
        ragas: ['Raga Yaman'],
        therapeuticPower: 'Promotes overall well-being, reduces stress, and aids mental clarity.',
        breathingExercises: ['Mindful Breathing'],
        specialFrequencies: ['639 Hz – Connecting and Harmonizing'],
      },
      HighBloodPressure: {
        ragas: ['Raga Bhairav', 'Raga Todi'],
        therapeuticPower: 'Helps reduce high blood pressure, soothes the nervous system.',
        breathingExercises: ['Deep Breathing'],
        specialFrequencies: ['528 Hz – Heart Healing'],
      },
      RespiratoryDisorders: {
        ragas: ['Raga Bhairavi', 'Raga Bhimpalasi', 'Raga Lalit', 'Raga Durga', 'Raga Chandrakaun', 'Raga Malkauns'],
        therapeuticPower: 'Aids in respiratory issues such as asthma and tuberculosis, as well as psychiatric disorders and arthritis.',
        breathingExercises: ['Alternate Nostril Breathing', 'Diaphragmatic Breathing'],
        specialFrequencies: ['432 Hz – Lung and Breathing Support'],
      },
      NervousSystem: {
        ragas: ['Raga Darbari', 'Raga Vrindavani Sarang', 'Raga Madhuvanti', 'Raga Multani'],
        therapeuticPower: 'Supports the nervous system, helps with brain-related diseases like Alzheimer’s or neural fatigue.',
        breathingExercises: ['Deep Breathing', '4-7-8 Breathing'],
        specialFrequencies: ['396 Hz – Nervous System Healing'],
      },
      BodyHeatDisorders: {
        ragas: ['Raga Miyan Malhar', 'Raga Megh'],
        therapeuticPower: 'Regulates body heat, soothes disorders caused by excessive body heat (e.g., heat stroke, fever).',
        breathingExercises: ['Cooling Breath (Sheetali)'],
        specialFrequencies: ['639 Hz – Body Temperature Regulation'],
      },
    };

    return recommendationsMap[emotion] || recommendationsMap['Neutral'];
  };

  const recommendations = getRecommendations(emotion);

  const handleStartJourney = () => {
    navigate('/therapy-journey', { state: { emotion, recommendations } });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-accent">Your Personalized Therapy Session</h2>

      <div className="bg-white shadow-md rounded-lg p-8 mb-12">
        <h3 className="text-2xl text-secondary font-semibold mb-4">Detected Emotion: {emotion}</h3>

        <h3 className="text-2xl font-semibold mb-4">Therapeutic Power:</h3>
        <p className="mb-6">{recommendations.therapeuticPower}</p>

        <h3 className="text-2xl font-semibold mb-4">Recommended Ragas:</h3>
        <ul className="list-disc list-inside mb-6">
          {recommendations.ragas.map((raga, index) => (
            <li key={index}>{raga}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Breathing Exercises:</h3>
        <ul className="list-disc list-inside mb-6">
          {recommendations.breathingExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Special Frequencies:</h3>
        <ul className="list-disc list-inside mb-6">
          {recommendations.specialFrequencies.map((freq, index) => (
            <li key={index}>{freq}</li>
          ))}
        </ul>
      </div>

      <MusicPlayer tracks={recommendations.ragas} />

      <button
        onClick={handleStartJourney}
        className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition duration-300 ml-4"
      >
        Start Music Therapy
      </button>
    </div>
  );
};

export default Therapy;