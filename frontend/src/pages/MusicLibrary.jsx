// frontend/src/pages/MusicLibrary.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance';

const MusicLibrary = () => {
  const [ragas, setRagas] = useState([]);
  const [filter, setFilter] = useState({
    instrument: '',
    mood: '',
  });

  useEffect(() => {
    // Fetch ragas from backend or use static data
    const fetchRagas = async () => {
      try {
        const res = await axios.get('/ragas'); // Ensure your backend has this endpoint
        setRagas(res.data);
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);
      }
    };

    fetchRagas();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredRagas = ragas.filter((raga) => {
    const instrumentMatch = filter.instrument ? raga.instrument === filter.instrument : true;
    const moodMatch = filter.mood ? raga.mood === filter.mood : true;
    return instrumentMatch && moodMatch;
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-accent">Music Library</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-secondary">Filter Ragas</h3>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2">Instrument:</label>
            <select
              name="instrument"
              value={filter.instrument}
              onChange={handleFilterChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All</option>
              <option value="Sitar">Sitar</option>
              <option value="Flute">Flute</option>
              <option value="Tabla">Tabla</option>
              {/* Add more instruments as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Mood:</label>
            <select
              name="mood"
              value={filter.mood}
              onChange={handleFilterChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Focus">Focus</option>
              <option value="Energy">Energy</option>
              {/* Add more moods as needed */}
            </select>
          </div>
        </div>
      </div>
      {filteredRagas.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRagas.map((raga) => (
            <li key={raga.id} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2 text-primary">{raga.name}</h4>
              <p className="text-gray-700 mb-2">Instrument: {raga.instrument}</p>
              <p className="text-gray-700 mb-4">Mood: {raga.mood}</p>
              <audio controls className="w-full">
                <source src={raga.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-700">No ragas found matching your filters.</p>
      )}
    </div>
  );
};

export default MusicLibrary;
