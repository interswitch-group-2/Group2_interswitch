import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-powderblue text-rgb(69, 121, 167) fixed bottom-0 left-0 right-0 text-center">
      <div className='bg-blue-400'>
      <a href="#" className="flex items-center">
            <img src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '150px' }} alt="interswitch Logo" />
          <span className='flex flex-col justify-center mx-auto text-xl mr-auto'>
            <h4 className="text-center">About Us</h4>
        <h4 className="text-center">Contact Us Terms & Condition Privacy Policy</h4>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a class="hover:underline"> Interswitch Group 2.™</a>. All Rights Reserved.</span>
        </span>
          </a>
      </div>
    </footer>
    



  );
};

export default Footer;
