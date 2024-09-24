// frontend/src/components/Questionnaire.jsx
import React, { useState } from 'react';
import axios from '../axiosInstance';
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
      const res = await axios.post('/therapy/recommendation', formData);
      navigate('/therapy');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      setError(err.response?.data?.msg || 'Failed to submit questionnaire.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-accent">Therapy Questionnaire</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Stress Level:</label>
            <select
              name="stressLevel"
              value={stressLevel}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Current Mood:</label>
            <select
              name="mood"
              value={mood}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select</option>
              <option value="Calm">Calm</option>
              <option value="Anxious">Anxious</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Preferred Instrument:</label>
            <select
              name="preferredInstrument"
              value={preferredInstrument}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select</option>
              <option value="Sitar">Sitar</option>
              <option value="Flute">Flute</option>
              <option value="Tabla">Tabla</option>
              <option value="Violin">Violin</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Sleep Quality:</label>
            <select
              name="sleepQuality"
              value={sleepQuality}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
          {/* Add more fields as needed */}
          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition duration-300"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
