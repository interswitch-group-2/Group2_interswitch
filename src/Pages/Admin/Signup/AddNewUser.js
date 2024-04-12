import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';

const AddNewUser = () => {
  const { user, authTokens } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    role: '', // Add role field to the formData state
  });
  const [error, setError] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError('Please provide an email for non-admin users');
      return;
    }

    try {
      const response = await fetch('https://safegate-backend-a63df812f989.herokuapp.com/user/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens}`, // Include the JWT token in the request headers
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('New user added successfully')
        navigate('/admin');
      } else {
        const data = await response.json();
        alert('This email has already been used!')
        // console.log(data)
        setError(data.error); // Assuming backend returns an error message
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration');
    }
  };

  // Check if user is admin
  // const isAdmin = user.role === 'ROLE_USER_ADMIN';
  // Define possible roles
  const roles = ["ROLE_USER_ADMIN", "ROLE_BLACKLIST_ADMIN"];

  // Render the page content only if user is admin
  // if (!isAdmin) {
  //   return <div>You can't see this page because you are not an admin.</div>;
  // }

  return (
    <div className="bg-grey-lighter md:ml-32 min-h-screen flex flex-col"> 
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"> 
        <img
          src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
          width="130"
          className="mb-4"
          alt="Interswitch Logo"
        />
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-2xl text-center">Add New User</h1>
          <input 
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" 
            onChange={handleFormChange}
          />
          
          {/* Dropdown menu for selecting role */}
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={handleFormChange}
          >
            <option value="">Select Role</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-400 text-white hover:bg-blue-600 focus:outline-none my-4"
            onClick={handleSubmit}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the <br /> 
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a> and <br />
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;
