import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all the fields');
      return;
    }

    try {
      // Check if the email exists in the database
      const signUpResponse = await fetch(`api/user/create/?email=${formData.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (signUpResponse.status === 200) {
        const userData = await signUpResponse.json();
        
        // Check if the user object contains a password
        if (!userData.password || userData.password.trim() === '') {
          // Update the password
          const response = await fetch(`api/user/update/${userData.id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...userData, password: formData.password }),
          });

          if (response.status === 200) {
            navigate('/login');
          } else {
            setError('Failed to update password. Please try again.');
          }
        } else {
          setError('Password has already been set for this email.');
        }
      } else {
        const data = await signUpResponse.json();
        let errorMessage = '';

        if (data.email) {
          errorMessage = data.email[0];
        } else {
          errorMessage = 'An error occurred during registration. Check your network and try again.';
        }
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration');
    }
  };

  return (
    <div class="bg-grey-lighter md:ml-32 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"> 
            <img
      src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              width="130"
              className="mb-4"
              alt="Interswitch Logo"
              />
    <div className="bg-white px-6 py-8 rounded shadow-md w-full">
          <h1 className="mb-8 text-2xl text-center">Set Password and Login</h1>
          {error && <div className="error mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleFormChange}
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />
            <button type="submit" className="w-full bg-blue-400 text-white rounded py-3 hover:bg-blue-600 focus:outline-none">
              Sign Up
            </button>
          </form>
          <div className="signup-container text-center text-sm text-grey-dark mt-4">
            <p>
              Already have an account? <Link to="/login" className="text-blue-400 hover:text-blue-600">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;