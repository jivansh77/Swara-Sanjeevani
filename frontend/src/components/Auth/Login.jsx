// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Updated for React Router v6
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.msg || 'Login failed');
    }
  };

  return (
    <div className='container mx-auto px-4 py-10 max-w-md'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <form onSubmit={onSubmit}>
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
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
