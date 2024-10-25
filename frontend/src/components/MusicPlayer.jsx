// frontend/src/components/MusicPlayer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicPlayer = ({ tracks: propTracks, autoplay = false, hideUI = false }) => {
  const [tracks, setTracks] = useState(propTracks || []);

  useEffect(() => {
    if (!propTracks || propTracks.length === 0) {
      const fetchMusic = async () => {
        try {
          const response = await axios.get('http://localhost:5001/api/music');
          setTracks(response.data);
        } catch (error) {
          console.error('Error fetching music tracks:', error);
        }
      };

      fetchMusic();
    }
  }, [propTracks]);

  return (
    <div className={`container mx-auto px-4 py-10 ${hideUI ? 'hidden' : ''}`}>
      <h3 className="text-3xl font-bold mb-6 text-center text-accent">Music Player</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <div key={index} className="bg-primary bg-opacity-20 p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium mb-2 text-accent">{track.title}</p>
            <audio controls={!autoplay} autoPlay={autoplay} className="w-full">
              <source src={`http://localhost:5001${track.filePath}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;