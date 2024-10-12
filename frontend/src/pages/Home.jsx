// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import FAQs from '../components/FAQ';

const Home = () => {
  // Initialize tsParticles instance
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Define particle options for smoke effect
  const particlesOptions = {
    fullScreen: {
      enable: false, // We'll position the particles manually
      zIndex: 1,      // Ensure particles are behind other elements
    },
    particles: {
      number: {
        value: 30, // Increased number for denser smoke
        density: {
          enable: true,
          area: 800, // Area for density calculation
        },
      },
      color: {
        value: '#dbc4ac', // White smoke for better contrast
      },
      opacity: {
        value: 0.35, // Slightly lower opacity for subtle smoke
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 18, // Smaller size for finer smoke
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 10,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.1, // Slower movement for natural drift
        direction: 'right',
        random: false,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
      shape: {
        type: 'circle',
      },
      life: {
        duration: {
          value: 20,
          sync: false,
        },
        count: 0, // Infinite
        delay: {
          value: 0,
          sync: false,
        },
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
        resize: true,
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen bg-home-bg bg-cover bg-center flex items-center justify-center">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Smoke Effect */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 w-full h-full"
        />

        {/* Content */}
        <div className="relative text-center text-white z-10">
          <h1 className="text-8xl font-bold mb-4">Swara Sanjeevani</h1>
          <p className="text-4xl mb-8">Music is a drug with no side effects</p>
          <Link
            to="/questionnaire"
            className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition duration-300"
          >
            Start Your Journey
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="text-white animate-bounce">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <AboutUs />
        <Testimonials />
        <ContactUs />
        <FAQs />
      </div>
    </div>
  );
};

export default Home;