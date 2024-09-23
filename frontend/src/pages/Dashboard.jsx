// frontend/src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance'; // Ensure axiosInstance is configured with interceptors
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user sessions from the backend
    const fetchSessions = async () => {
      try {
        const res = await axios.get('/user/sessions');
        setSessions(res.data);
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
      alert('Session deleted successfully.');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert(err.response?.data?.msg || 'Failed to delete session');
    }
  };

  const handleView = (sessionId) => {
    navigate(`/therapy/${sessionId}`);
  };

  if (loading) {
    return <p className="text-center mt-20">Loading your dashboard...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-accent">Your Dashboard</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {sessions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-primary text-left text-xs font-medium text-accent uppercase tracking-wider">
                  Date
                </th>
                <th className="py-3 px-6 bg-primary text-left text-xs font-medium text-accent uppercase tracking-wider">
                  Ragas
                </th>
                <th className="py-3 px-6 bg-primary text-center text-xs font-medium text-accent uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session._id} className="border-b">
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {new Date(session.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {session.recommendation.ragas.join(', ')}
                  </td>
                  <td className="py-4 px-6 text-sm text-center">
                    <button
                      onClick={() => handleView(session._id)}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded mr-2"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(session._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-700">You have no previous sessions. Start your first therapy session now!</p>
      )}
    </div>
  );
};

export default Dashboard;
