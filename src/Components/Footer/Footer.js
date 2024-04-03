import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="w-full text-black-400 overflow-hidden">
        <div className='bg-blue-300'>
        <img
              src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              width="130"
              className="mr-10"
              alt="Interswitch Logo"
              />
              <h4 className="text-center ">About Us</h4>
              <h4 className="text-center ">Contact Us Terms & Condition Privacy Policy</h4>
              <h4 className="text-center ">© 2024 Interswitch Group 2.</h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
