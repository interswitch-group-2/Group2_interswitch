import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import LoginPage from './Pages/Login/LoginPage';  
// import SignUpHeader from './components/SignUpHeader'; 
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { AuthProvider } from './Context/AuthContext'


function App() {
  // const isSignUpPage = window.location.pathname === '/';
  const isLoginPage = window.location.pathname === '/login';
  const headerComponent = isLoginPage ? <Header title='Welcome to Interswitch Pay'/> : <Header title='Welcome to Interswitch Pay'/>;
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
          </Routes>
          { footerComponent }
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;