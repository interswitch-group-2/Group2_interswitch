import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full items-center flex inline-block bg-white py-2 px-6 hidden sm:flex border-b-2 border-gray-100">
      <div className="flex">
        {!isOpen && (
          <a href="#" onClick={handleOpen} className="p-2">
            <span
              className="iconify text-gray-400 mt-4"
              data-icon="gg:menu-left"
              data-width="30"
              data-height="30"
            ></span>
          </a>
        )}

        <a href="">
          <h3 class='Logo'>
          <img
            src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" width='130'
            className="mr-12 mb-2 mt-3 ml-6"
            alt="Interswitch Logo"
          />
          </h3>
        </a>
      </div>

      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="w-full md:block md:w-auto mr-auto" id="navbar-default">
          <div className="text-gray-600 flex">
            <a href="#" title="dashboard" className="px-2 py-1 mx-1 mt-3 ml-6 text-xl color-#FDFDFD">
              Welcome to Interswitch Pay
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2"></div>

      <div className="relative w-1/2 flex justify-end">

      </div>
    </header>
  );
}

export default Header;
