import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import '../styles/logout.css'

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the 'LOGOUT' action to clear the user's authentication token
    setToken({ type: 'LOGOUT' });

    // Remove the token from localStorage
    localStorage.removeItem('loginToken');

    // Redirect to the home page or any other desired location
    navigate('/');
  };

  return (
    <div className="logout-container">
    <div className="logout-content">
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  </div>
  );
};

export default Logout;




