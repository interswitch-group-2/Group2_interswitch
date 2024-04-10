import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';

const AddNewUser = () => {
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
  
  
<div class="bg-grey-lighter md:ml-32 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"> 
            <img
      src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              width="130"
              className="mb-4"
              alt="Interswitch Logo"
              />
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-2xl text-center">Add New User</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <label htmlFor="admin">Admin Permission </label>
                    <input
                        type="checkbox"
                        id="admin"
                        name="isAdmin"
                        checked={formData.isAdmin}
                        onChange={handleFormChange}
                    /> <br />

                    <label htmlFor="blacklist">Blacklist Permission </label>
                    <input
                        type="checkbox"
                        id="blacklist"
                        name="isBlacklisted"
                        checked={formData.isBlacklisted}
                        onChange={handleFormChange}
                    /> <br />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-blue-400 text-white hover:bg-blue-600 focus:outline-none my-4"
                    >
                        Create Account
                    </button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the <br /> 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and <br />
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default AddNewUser;
