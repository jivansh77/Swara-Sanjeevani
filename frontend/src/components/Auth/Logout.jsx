// frontend/src/pages/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    // Clear authentication tokens or user data
    localStorage.removeItem('token');
    // Redirect to the login page or home page
    history('/login');
  }, [history]);

  return null;
};

export default Logout;