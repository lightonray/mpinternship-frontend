import React, { useState } from 'react';
import '../styles/register.css'; 

const AddCar = () => {
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem('userid'),
    brand: '',
    model: '',
    year: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const token = localStorage.getItem('loginToken');

      if (!token) {
        console.error('Token not found in local storage.');
        return;
      }
      const response = await fetch('http://127.0.0.1:8000/api/addCar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        setError(null);
        setSuccessMessage('Car added successfully.');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        console.error('Car addition failed:', errorData.message);
      }
    } catch (error) {
      setError('Car addition failed. Please try again later.');
      console.error('Car addition failed:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Add New Car</h2>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="int"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Car</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddCar;