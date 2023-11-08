import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/cardetails.css'

const CarDetails = () => {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState({ make: '', model: '', year: '' });

  const fetchCarDetails = async () => {
    try {
      const token = localStorage.getItem('loginToken'); // Assuming you have a token in localStorage
      if (!token) {
        console.error('Token not found in local storage.');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/api/getCarById/${carId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        const data = result.data;
        console.log(data);
        if (data.length > 0) {
            // Assuming data is an array, take the first item
            const carData = data[0];
            setCarDetails({
              make: carData.brand || '',
              model: carData.model || '',
              year: carData.year || '',
            });
        }
      } else {
        throw new Error('Failed to fetch car details');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCarDetails();
  }, [carId]);

  return (
    <div className="car-details-container">
      <h2 className="car-details-title">Car Details</h2>
      <div className="car-details">
        <strong>Make:</strong> {carDetails.make}
      </div>
      <div className="car-details">
        <strong>Model:</strong> {carDetails.model}
      </div>
      <div className="car-details">
        <strong>Year:</strong> {carDetails.year}
      </div>
    </div>
  );
};

export default CarDetails;