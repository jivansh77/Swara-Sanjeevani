// frontend/src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance'; // Ensure axiosInstance is configured with interceptors
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar'; // Import the ProgressBar component

const Dashboard = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [sessionPercentages, setSessionPercentages] = useState({}); // State to store percentages for each session
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user sessions from the backend
    const fetchSessions = async () => {
      try {
        const res = await axios.get('/user/sessions');
        const sessionsData = res.data;

        // Generate random percentage for each session and store it in the state
        const percentages = {};
        sessionsData.forEach((session) => {
          percentages[session._id] = generateRandomPercentage(); // Store random percentage by session ID
        });

        setSessions(sessionsData);
        setSessionPercentages(percentages); // Set percentages in state
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);
        setError(err.response?.data?.msg || 'Failed to fetch sessions');
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const handleDelete = async (sessionId) => {
    if (!window.confirm('Are you sure you want to delete this session?')) {
      return;
    }

    try {
      await axios.delete(`/user/sessions/${sessionId}`);
      setSessions(sessions.filter((session) => session._id !== sessionId));
      setSessionPercentages((prev) => {
        const newPercentages = { ...prev };
        delete newPercentages[sessionId];
        return newPercentages;
      });
      alert('Session deleted successfully.');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert(err.response?.data?.msg || 'Failed to delete session');
    }
  };

  const handleView = (sessionId) => {
    navigate(`/therapy/${sessionId}`);
  };

  // Helper function to generate random percentages
  const generateRandomPercentage = () => {
    return Math.floor(Math.random() * 100) + 1; // Generate a random percentage between 1 and 100
  };

  if (loading) {
    return <p className="text-center mt-20 text-xl">Loading your dashboard...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-semibold mb-12 text-center text-accent">Your Dashboard</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {sessions.length > 0 ? (
        <div className="space-y-8">
          {sessions.map((session) => (
            <div
              key={session._id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:w-1/3 w-full">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Date:</span>{' '}
                  {new Date(session.date).toLocaleDateString()}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Ragas:</span>{' '}
                  {session.recommendation.ragas.join(', ')}
                </p>
              </div>
              <div className="md:w-2/3 w-full mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">Emotional State:</h3>
                <div className="flex space-x-4">
                  {/* Show hardcoded Neutral ProgressBar with stored percentage */}
                  <ProgressBar label="Neutral" percentage={sessionPercentages[session._id] || 0} />
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto flex space-x-2">
                <button
                  onClick={() => handleView(session._id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(session._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 text-xl">You have no previous sessions. Start your first therapy session now!</p>
      )}
    </div>
  );
};

export default Dashboard;