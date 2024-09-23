// src/components/Questionnaire.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Questionnaire = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    stressLevel: '',
    mood: '',
    preferredInstrument: '',
    sleepQuality: '',
    // Add more fields as needed
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { stressLevel, mood, preferredInstrument, sleepQuality } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to submit the questionnaire.');
        setLoading(false);
        return;
      }

      const res = await axios.post('api/therapy/recommendation', formData, {
        headers: {
          'x-auth-token': token,
        },
      });
      // Assuming the backend returns the session data
      navigate('/therapy');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      setError(err.response?.data?.msg || 'Failed to submit questionnaire');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-10 max-w-lg'>
      <h2 className='text-2xl font-bold mb-6'>Personalized Therapy Questionnaire</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <form onSubmit={onSubmit}>
        {/* Stress Level */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>How would you rate your current stress level?</label>
          <select
            name='stressLevel'
            value={stressLevel}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
          >
            <option value=''>Select...</option>
            <option value='Low'>Low</option>
            <option value='Moderate'>Moderate</option>
            <option value='High'>High</option>
          </select>
        </div>

        {/* Mood */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>How are you feeling today?</label>
          <select
            name='mood'
            value={mood}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
          >
            <option value=''>Select...</option>
            <option value='Happy'>Happy</option>
            <option value='Sad'>Sad</option>
            <option value='Anxious'>Anxious</option>
            <option value='Energetic'>Energetic</option>
            {/* Add more moods as needed */}
          </select>
        </div>

        {/* Preferred Instrument */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Which musical instrument do you prefer?</label>
          <select
            name='preferredInstrument'
            value={preferredInstrument}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
          >
            <option value=''>Select...</option>
            <option value='Sitar'>Sitar</option>
            <option value='Flute'>Flute</option>
            <option value='Tabla'>Tabla</option>
            <option value='Guitar'>Guitar</option>
            {/* Add more instruments as needed */}
          </select>
        </div>

        {/* Sleep Quality */}
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>How would you describe your sleep quality?</label>
          <select
            name='sleepQuality'
            value={sleepQuality}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
          >
            <option value=''>Select...</option>
            <option value='Poor'>Poor</option>
            <option value='Average'>Average</option>
            <option value='Good'>Good</option>
            <option value='Excellent'>Excellent</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded w-full'
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
