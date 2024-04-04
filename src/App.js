import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';  
// import SignUpHeader from './components/SignUpHeader'; 
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { AuthProvider } from './Context/AuthContext'
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";
import SignupPage from "./Pages/Admin/Signup/SignupPage";


function App() {
  // const isSignUpPage = window.location.pathname === '/';
  const isLoginPage = window.location.pathname === '/';
  const headerComponent = isLoginPage ? <Header title='Welcome to Safe Gate'/> : <Header title='Welcome to Safe Gate Admin Dashboard'/>;
  const footerComponent = isLoginPage ? <Footer /> : <Footer />;

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <AuthProvider>
          {headerComponent}
          <Routes>
            
            {/* <Route path="/" element={<SignUpPage />} />  */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/add-new-user" element={<SignupPage />} />
          </Routes>
          {footerComponent}
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;