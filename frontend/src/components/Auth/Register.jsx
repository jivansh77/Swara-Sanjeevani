// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Updated for React Router v6
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState('');

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }

    try {
      const newUser = { name, email, password };
      const res = await axios.post('/api/auth/register', newUser);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.msg || 'Registration failed');
    }
  };

  return (
    <div className='container mx-auto px-4 py-10 max-w-md'>
      <h2 className='text-2xl font-bold mb-4'>Register</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <form onSubmit={onSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email:</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password:</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
            minLength='6'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Confirm Password:</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            className='w-full border border-gray-300 p-2 rounded'
            required
            minLength='6'
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
