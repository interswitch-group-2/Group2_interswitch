import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-powderblue text-rgb(69, 121, 167) fixed bottom-0 left-0 right-0 text-center">
      <div className='bg-blue-300'>
        <img
          src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
          width="130"
          className="mr-10"
          alt="Interswitch Logo"
        />
        <h4 className="text-center">About Us</h4>
        <h4 className="text-center">Contact Us Terms & Condition Privacy Policy</h4>
        <h4 className="text-center">© 2024 Interswitch Group 2.</h4>
      </div>
    </footer>
  );
};

export default Footer;
