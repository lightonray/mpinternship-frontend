import React, { useState } from 'react';
import '../css/Contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to a server or perform other actions
    console.log(formData); // For demonstration purposes
  };

  return (
    <div className="contact-form"> {/* Apply the CSS class to the container */}
      <h2 className="contact-form-title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label-name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label-email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label-message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input-message"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;