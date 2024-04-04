import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';

const SignupPage = () => {
  // const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isBlacklisted: false,
    isAdmin: false,
  });
  const [error, setError] = useState(null);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError('Please provide an email for non-admin users');
      return;
    }

    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authTokens')}`, // Include the JWT token in the request headers
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        navigate('/admin-dashbord');
      } else {
        const data = await response.json();
        setError(data.message); // Assuming backend returns an error message
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration');
    }
  };

  // Check if user is admin
  // const isAdmin = user && user.isAdmin;
  const isAdmin = true

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      {error && <div className="error">{error}</div>}
      {isAdmin ? (
        <form onSubmit={handleSubmit}>
          <ul>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <label>
            <input
              type="checkbox"
              name="isBlacklisted"
              checked={formData.isBlacklisted}
              onChange={handleFormChange}
            />
            Blacklisted Permission
          </label>
          <label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleFormChange}
            />
            Admin Permission
          </label>
          </ul>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <p>You do not have permission to register new users.</p>
      )}
      <div className="signup-container">
        
      </div>
    </div>
  );
};

export default SignupPage;
