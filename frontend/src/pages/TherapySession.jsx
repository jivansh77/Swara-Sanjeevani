// src/pages/TherapySession.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosInstance';
import MusicPlayer from '../components/MusicPlayer';

const TherapySession = () => {
  const { id } = useParams(); // Get session ID from URL
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await axios.get(`/user/sessions/latest`);
        setSession(res.data);
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);
        setError(err.response?.data?.msg || 'Failed to fetch session');
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [id]);

  if (loading) {
    return <p className='text-center mt-10'>Loading your therapy session...</p>;
  }

  if (error) {
    return <p className='text-red-500 text-center mt-10'>{error}</p>;
  }

  return (
    <div className='container mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold mb-4'>Your Personalized Therapy Session</h2>
      
      <div className='bg-white shadow-md rounded p-6 mb-6'>
        <h3 className='text-2xl font-semibold mb-4'>Recommended Ragas:</h3>
        <ul className='list-disc list-inside mb-4'>
          {session.recommendation.ragas.map((raga, index) => (
            <li key={index}>{raga}</li>
          ))}
        </ul>
        
        <h3 className='text-2xl font-semibold mb-4'>Breathing Exercises:</h3>
        <ul className='list-disc list-inside mb-4'>
          {session.recommendation.breathingExercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
        
        <h3 className='text-2xl font-semibold mb-4'>Special Frequencies:</h3>
        <ul className='list-disc list-inside mb-4'>
          {session.recommendation.specialFrequencies.map((freq, index) => (
            <li key={index}>{freq}</li>
          ))}
        </ul>
      </div>

      <MusicPlayer tracks={session.recommendation.ragas} />
    </div>
  );
};

export default TherapySession;
