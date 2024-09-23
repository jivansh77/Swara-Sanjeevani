// frontend/src/components/MusicPlayer.jsx
import React from 'react';

const MusicPlayer = ({ tracks }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h3 className="text-3xl font-bold mb-6 text-center text-accent">Music Player</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <div key={index} className="bg-primary bg-opacity-20 p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium mb-2 text-accent">{track}</p>
            <audio controls className="w-full">
              <source src={`/audio/${track.replace(/\s+/g, '_').toLowerCase()}.mp3`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;