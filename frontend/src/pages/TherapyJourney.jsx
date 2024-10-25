import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const videoMappings = {
  Excitement: {
    youtubeUrl: "https://www.youtube.com/embed/wXwuOAWrWmI?controls=0&autoplay=1&mute=1&start=15",
    audioUrl: "https://www.youtube.com/embed/YOUR_AUDIO_VIDEO_ID?controls=0&autoplay=1&start=1",
    description: "Energizing natural scenes with vibrant colors and flowing water"
  },
  Happiness: {
    youtubeUrl: "https://www.youtube.com/embed/ryUxrFUk6MY?controls=0&autoplay=1&mute=1&start=10",
    audioUrl: "https://www.youtube.com/embed/YOUR_AUDIO_VIDEO_ID?controls=0&autoplay=1&start=1",
    description: "Peaceful garden scenes with gentle sunlight and blooming flowers"
  },
  Contentment: {
    youtubeUrl: "https://www.youtube.com/embed/fu88TVe3S3I?controls=0&autoplay=1&mute=1",
    audioUrl: "https://www.youtube.com/embed/YOUR_AUDIO_VIDEO_ID?controls=0&autoplay=1&start=1",
    description: "Serene forest landscapes with soft wind through trees"
  },
  Anxiety: {
    youtubeUrl: "https://www.youtube.com/embed/c9dnBCJizjI?controls=0&autoplay=1&mute=1",
    audioUrl: "https://www.youtube.com/embed/wdBph1u9fck?controls=0&autoplay=1&start=10",
    description: "Calming ocean waves and beach scenes"
  },
  Sadness: {
    youtubeUrl: "https://www.youtube.com/embed/F-_-cZ4JxLs?controls=0&autoplay=1&mute=1",
    audioUrl: "https://www.youtube.com/embed/YOUR_AUDIO_VIDEO_ID?controls=0&autoplay=1&start=1",
    description: "Gentle rainfall and misty mountain views"
  },
  Depression: {
    youtubeUrl: "https://www.youtube.com/embed/YabbXKzZmiM?controls=0&autoplay=1&mute=1&start=40",
    audioUrl: "https://www.youtube.com/embed/wdBph1u9fck?controls=0&autoplay=1&start=10",
    description: "Sunrise scenes with gradual lightening of the sky"
  },
  Neutral: {
    youtubeUrl: "https://www.youtube.com/embed/ngMkU-FgZI4?controls=0&autoplay=1&mute=1&start=5",
    audioUrl: "https://www.youtube.com/embed/bIFCrhptbxk?controls=0&autoplay=1&start=12",
    description: "Balanced nature scenes with gentle movement"
  }
};

const TherapyJourney = () => {
  const location = useLocation();
  const { emotion, recommendations } = location.state || { 
    emotion: 'Neutral',
    recommendations: { ragas: ['Raga Yaman'] }
  };
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isBreathing, setIsBreathing] = useState(true);

  const videoData = videoMappings[emotion] || videoMappings.Neutral;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full mt-8">
        <iframe
          src={videoData.youtubeUrl}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Therapy Session Video"
          onLoad={handleVideoLoad}
          loading="eager"
        ></iframe>
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10">
        {/* Instructions Modal - shown initially */}
        {showInstructions && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-6 rounded-lg max-w-md text-white text-center">
            <button 
              onClick={() => setShowInstructions(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Welcome to Your Therapy Session</h2>
            <p className="mb-4">Find a comfortable position and take a deep breath.</p>
            <p className="mb-4">The breathing circle will guide your breath - inhale as it expands, exhale as it contracts.</p>
            <p>Music will play in the background to enhance your experience.</p>
          </div>
        )}

        {/* Emotion Title - fades out after 5 seconds */}
        <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-center transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-4xl font-bold mb-2">{emotion}</h1>
          <p className="text-xl">{videoData.description}</p>
        </div>

        {/* Breathing Guide - can be toggled */}
        {isBreathing && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white opacity-60 animate-[ping_5s_ease-in-out_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="absolute bottom-24 right-8 space-y-4">
          <button 
            onClick={toggleBreathing}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-all"
          >
            {isBreathing ? 'Hide' : 'Show'} Breathing Guide
          </button>
        </div>

        {/* Audio Player - positioned at bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm p-4"> */}
          <iframe
            src={videoData.audioUrl}
            allow="autoplay"
            title="Therapy Session Audio"
            style={{ display: 'none' }}
          ></iframe>
        {/* </div> */}
      </div>

      {/* Loading Screen */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
          <span className="text-white text-2xl">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default TherapyJourney;