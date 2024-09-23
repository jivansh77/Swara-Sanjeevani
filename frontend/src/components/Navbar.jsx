// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-primary text-accent shadow-md fixed w-full z-10'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <div>
            <Link to='/' className='text-2xl font-bold'>
              Swara Sanjeevani
            </Link>
          </div>
          <div className='space-x-4'>
            <Link to='/dashboard' className='text-gray-600 hover:text-gray-800'>
              Dashboard
            </Link>
            <Link to='/therapy' className='text-gray-600 hover:text-gray-800'>
              Therapy
            </Link>
            <Link to='/questionnaire' className='text-gray-600 hover:text-gray-800'>
              Questionnaire
            </Link>
            <Link to='/music-library' className='text-gray-600 hover:text-gray-800'>
              Music Library
            </Link>
            <Link to='/blog' className='text-gray-600 hover:text-gray-800'>
              Blog
            </Link>
            <Link to='/login' className='text-gray-600 hover:text-gray-800'>
              Login
            </Link>
            <Link to='/register' className='text-gray-600 hover:text-gray-800'>
              Register
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;