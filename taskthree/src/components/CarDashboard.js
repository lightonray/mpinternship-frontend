import React, { useState, useEffect } from 'react';
import '../styles/cardashboard.css';
import { Link } from 'react-router-dom';

const CarDashboard = () => {
  const [cars, setCars] = useState([]);

  const fetchCarInfo = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/getAllCars', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        // Ensure that result.data is an array
        if (Array.isArray(result.data)) {
          setCars(result.data);
        } else {
          console.error('API response data is not an array:', result.data);
        }
      } else {
        throw new Error('Failed to fetch car info');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCarInfo();
  }, []);

  return (
    <div className="car-dashboard">
      <h2>Car Dashboard</h2>
      {cars.map((car) => (
        <div className="car-container">
          <Link to={`/cardetails/${car.id}`} className="car-link">
          <div className="car-info" key={car.id}>
            <p>
              <strong>Brand:</strong> {car.brand}
            </p>
            <p>
              <strong>Model:</strong> {car.model}
            </p>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
          </div>
          </Link>
        </div>
        
      ))}
       <Link to="/addnewcar" className="add-car-button">Add new car</Link>
    </div>
    
  );
};

export default CarDashboard;