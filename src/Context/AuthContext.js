import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null
  );
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true); // Remove unused variable
  const navigate = useNavigate();

  // Define updateToken outside of AuthProvider to avoid unnecessary re-renders
  const updateToken = async () => {
    try {
      let response = await fetch('/auth/jwt/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh: authTokens.refresh,
        }),
      });
      let data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));
      } else {
        logoutUser();
      }
    } catch (error) {
      console.error('Error updating token:', error);
      logoutUser();
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  };

  const loginUser = async (e) => {
    // Your login logic
  };

  useEffect(() => {
    let fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens]);

  const contextData = {
    user: user,
    error: error,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export default AuthContext;
