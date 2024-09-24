// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen bg-home-bg bg-cover bg-bottom-8px flex items-center justify-center">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0"></div>
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

      {/* Smooth Scrolling Sections */}
      <div>
        <AboutUs />
        <Testimonials />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;