import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { Link , useNavigate } from 'react-router-dom';

const Navbar = () => {
  
const auth = localStorage.getItem('loginToken');
const navigate = useNavigate();
const logout = () => {
    localStorage.clear();
    navigate('/');
};

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Car Portal</h1>
        </div>

        <ul className="nav-links">
        { auth ? (
  <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cardashboard">Car Management</Link>
              </li>
              <li>
                <Link to="/userdashboard">My Profile</Link>
              </li>
              <li>
                <Link onClick={logout} to="/">Logout</Link>
              </li>
  </>
  ) : (
    <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
    </>
  )}
        </ul>   
      </div>
    </nav>
  );
};

export default Navbar;