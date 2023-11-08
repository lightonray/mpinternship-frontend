import React, { useState } from 'react';
import '../styles/edituser.css';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('loginToken');
      const userId = localStorage.getItem('userid');

      if (!token) {
        console.error('Token not found in local storage.');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/updateUserInfo/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setSuccessMessage('Update successful');
        setError(null);
        navigate(`/userdashboard/`);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setSuccessMessage(null);
        console.error('Update failed:', errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="update-button">Update</button>
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default EditUser;





