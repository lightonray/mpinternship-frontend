  import React, { useState } from 'react';
  import '../styles/login.css'
  import { useAuth } from './AuthProvider';
  import { useNavigate } from 'react-router-dom';
  

  const Login = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const [error, setError] = useState(null);
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        // Make a POST request to the registration API endpoint
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Registration successful
            console.log('Login successful');
            const responseData = await response.json();
            console.log(responseData);
            setError(null);

            const token = responseData.data.token;
            const userId = responseData.data.id;
            localStorage.setItem('loginToken', token);
            localStorage.setItem('userid', userId);

              // if (storedToken !== null) {
              //   // Token is successfully stored in localStorage
              //   console.log('Token is set in localStorage');
              // } else {
              //   // Token is not set in localStorage
              //   console.log('Token is not in localStorage');
              // }
            console.log(token);
            console.log(userId);
            setToken({ type: 'LOGIN', payload: token });
            // localStorage.setItem('loginToken', token);
            setError(null);

            

            // Redirect to /userdashboard
            navigate(`/userdashboard/`);

        } else {
          // Handle registration error and display the error message from the server
          const errorData = await response.json();
          setError(errorData.message);
          console.error('Login failed:', errorData.message);
        }
      } catch (error) {
        setError('Login failed. Please try again later.');
        console.error('Login failed:', error);
      }


    };

    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    );
  };

  export default Login;