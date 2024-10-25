// frontend/src/pages/MusicLibrary.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance'; // Ensure axiosInstance is correctly configured
import { CSSTransition } from 'react-transition-group'; // Alternative for transition
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'; // For expand/collapse icons
import './MusicLibrary.css'; // Import CSS file for transitions

const MusicLibrary = () => {
  const [ragas, setRagas] = useState([]);
  const [filter, setFilter] = useState({
    instrument: '',
    mood: '',
  });
  const [expandedMoods, setExpandedMoods] = useState({});

  // Define hardcoded moods
  const predefinedMoods = ['Relaxation', 'Focus', 'Energy', 'Meditation', 'Sleep'];

  useEffect(() => {
    const fetchRagas = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/music'); // Ensure your backend has this endpoint
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

  const toggleMood = (mood) => {
    setExpandedMoods((prev) => ({
      ...prev,
      [mood]: !prev[mood],
    }));
  };

  // Group ragas by mood, using "Focus" as default for ragas without a mood
  const groupedRagas = predefinedMoods.reduce((groups, mood) => {
    groups[mood] = ragas.filter((raga) => raga.mood === mood);
    return groups;
  }, {});

  // Add ragas that don't have a defined mood into "Focus"
  groupedRagas['Focus'] = groupedRagas['Focus'].concat(
    ragas.filter((raga) => !raga.mood || raga.mood === '')
  );

  // Apply filters
  const filteredGroupedRagas = Object.keys(groupedRagas).reduce((filteredGroups, mood) => {
    if (filter.mood && mood !== filter.mood) return filteredGroups;

    const filteredRagas = groupedRagas[mood].filter((raga) => {
      const instrumentMatch = filter.instrument ? raga.instrument === filter.instrument : true;
      return instrumentMatch;
    });

    // Always include the mood even if it has no ragas
    filteredGroups[mood] = filteredRagas;

    return filteredGroups;
  }, {});

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
              {predefinedMoods.map((mood) => (
                <option key={mood} value={mood}>
                  {mood}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {Object.keys(filteredGroupedRagas).length > 0 ? (
        <div className="space-y-6">
          {Object.keys(filteredGroupedRagas).map((mood) => (
            <div key={mood} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleMood(mood)}
                className="w-full flex justify-between items-center p-6 bg-primary bg-opacity-20 rounded-t-lg focus:outline-none"
              >
                <span className="text-xl font-semibold text-accent">{mood}</span>
                {expandedMoods[mood] ? (
                  <ChevronUpIcon className="h-6 w-6 text-accent" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-accent" />
                )}
              </button>
              <CSSTransition
                in={expandedMoods[mood]} // Controls whether the section is expanded or not
                timeout={300}
                classNames="expand"
                unmountOnExit
              >
                <div className="p-6">
                  {filteredGroupedRagas[mood].length > 0 ? (
                    <ul className="space-y-4">
                      {filteredGroupedRagas[mood].map((raga) => (
                        <li key={raga._id} className="bg-secondary bg-opacity-10 p-4 rounded-lg shadow-inner">
                          <h4 className="text-lg font-semibold mb-2 text-primary">{raga.title}</h4>
                          <p className="text-gray-700 mb-2">Instrument: {raga.instrument}</p>
                          <audio controls className="w-full">
                            <source src={`http://localhost:5001${raga.filePath}`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center text-gray-500">No ragas available for this mood.</p>
                  )}
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No ragas found matching your filters.</p>
      )}
    </div>
  );
};

export default MusicLibrary;