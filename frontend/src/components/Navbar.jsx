// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaMusic, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { RiPsychotherapyFill } from "react-icons/ri";
import { MdArticle, MdLogout } from "react-icons/md";
const token = localStorage.getItem('token');

const Navbar = () => {
  return (
    <nav className='bg-primary text-accent shadow-md fixed w-full z-10 h-16'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='/' className='text-2xl font-bold text-accent'>
            Swara Sanjeevani
          </Link>
        </div>

        <div className={`space-x-4 lg:flex items-center lg:block`}>
          <Link to='/dashboard' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/dashboard' ? 'text-black' : ''}`}>
            <FaBook className='mr-1' /> Dashboard
          </Link>

          <Link to='/therapy' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/therapy' ? 'text-black' : ''}`}>
            <RiPsychotherapyFill className='mr-1' size={20}/> Therapy
          </Link>

          <Link to='/music-library' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/music-library' ? 'text-black' : ''}`}>
            <FaMusic className='mr-1' /> Music Library
          </Link>

          <Link to='/blog' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/blog' ? 'text-black' : ''}`}>
            <MdArticle className='mr-1' size={20}/> Blogs
          </Link>

          {token ? (
              <Link to='/logout' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/logout' ? 'text-black' : ''}`}>
                <MdLogout className='mr-1' size={20}/> Logout
              </Link>
          ) : (
            <>
              <Link to='/login' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/login' ? 'text-black' : ''}`}>
                <FaSignInAlt className='mr-1' /> Login
              </Link>

              <Link to='/register' className={`flex items-center text-gray-600 hover:text-gray-800 ${location.pathname === '/register' ? 'text-black' : ''}`}>
                <FaUserAlt className='mr-1' /> Register
              </Link>
            </>
          )}
          
          <Link 
            to='/questionnaire'
            className={`bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors ${location.pathname === '/questionnaire' ? 'ring-2 ring-black' : ''}`}
          >
            Chat with Swara
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;