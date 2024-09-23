// frontend/src/components/MusicPlayer.jsx
import React from 'react';

const MusicPlayer = ({ tracks }) => {
  return (
    <div className='mt-6'>
      <h3 className='text-xl font-semibold mb-2'>Listen to Your Ragas:</h3>
      {tracks.map((track, index) => (
        <div key={index} className='mb-4'>
          <p className='font-medium'>{track}</p>
          {/* Assuming you have audio files or streams */}
          <audio controls className='w-full'>
            <source src={`/audio/${track}.mp3`} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;