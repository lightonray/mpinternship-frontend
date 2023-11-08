import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/userdashboard.css';

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('loginToken');
      const userId = localStorage.getItem('userid');

      if (!token) {
        console.error('Token not found in local storage.');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/getUserInfo/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        const data = result.data;

        if (data) {
          setUserInfo({ name: data.name || '', email: data.email || '' });
        }
      } else {
        throw new Error('Failed to fetch user info');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  },);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="user-info">
        <p>
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {userInfo.email}
        </p>
      </div>

      <Link to={`/edit-user-information/`}>
        <button className="edit-button">Edit</button>
      </Link>
    </div>
  );
};

export default UserDashboard;