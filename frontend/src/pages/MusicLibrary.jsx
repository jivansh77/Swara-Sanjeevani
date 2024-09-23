// src/pages/MusicLibrary.jsx
import React, { useEffect, useState } from 'react';

const MusicLibrary = () => {
  const [ragas, setRagas] = useState([]);
  const [filter, setFilter] = useState({
    instrument: '',
    mood: '',
  });

  useEffect(() => {
    // Fetch ragas from backend or use static data
    const fetchRagas = () => {
      const staticRagas = [
        {
          id: 1,
          name: 'Raga Yaman',
          instrument: 'Sitar',
          mood: 'Relaxation',
          audio: '/audio/raga_yaman.mp3',
        },
        {
          id: 2,
          name: 'Raga Bhairavi',
          instrument: 'Flute',
          mood: 'Focus',
          audio: '/audio/raga_bhairavi.mp3',
        },
        // Add more ragas as needed
      ];
      setRagas(staticRagas);
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
    <div className='container mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold mb-6'>Music Library</h2>
      <div className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Filter Ragas</h3>
        <div className='flex space-x-4'>
          <div>
            <label className='block text-gray-700'>Instrument:</label>
            <select
              name='instrument'
              value={filter.instrument}
              onChange={handleFilterChange}
              className='border border-gray-300 p-2 rounded'
            >
              <option value=''>All</option>
              <option value='Sitar'>Sitar</option>
              <option value='Flute'>Flute</option>
              <option value='Tabla'>Tabla</option>
              {/* Add more instruments as needed */}
            </select>
          </div>
          <div>
            <label className='block text-gray-700'>Mood:</label>
            <select
              name='mood'
              value={filter.mood}
              onChange={handleFilterChange}
              className='border border-gray-300 p-2 rounded'
            >
              <option value=''>All</option>
              <option value='Relaxation'>Relaxation</option>
              <option value='Focus'>Focus</option>
              <option value='Energy'>Energy</option>
              {/* Add more moods as needed */}
            </select>
          </div>
        </div>
      </div>
      {filteredRagas.length > 0 ? (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredRagas.map((raga) => (
            <li key={raga.id} className='border border-gray-300 p-4 rounded'>
              <h4 className='text-xl font-semibold mb-2'>{raga.name}</h4>
              <p className='text-gray-700'>Instrument: {raga.instrument}</p>
              <p className='text-gray-700'>Mood: {raga.mood}</p>
              <audio controls className='w-full mt-2'>
                <source src={raga.audio} type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      ) : (
        <p>No ragas found matching your filters.</p>
      )}
    </div>
  );
};

export default MusicLibrary;
