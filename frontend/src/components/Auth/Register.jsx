// frontend/src/components/Auth/Register.jsx
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
      axios.defaults.headers.common['x-auth-token'] = res.data.token; // Set default header
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.msg || 'Registration failed');
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-accent">Register</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
              minLength="6"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Confirm Password:</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              className="w-full border border-secondary p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-accent py-3 rounded-lg hover:bg-secondary transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
