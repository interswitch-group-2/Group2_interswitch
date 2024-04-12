import React from 'react';

const AdminDashboard = () => {
  return (
<div className="container md:flex">
      <section className="left-panel">
        <aside className="relative bg-sidebar bg-black h-screen w-64 hidden sm:block shadow-xl" x-show="isOpen()">
          <div className="p-6 inline-flex">
            <a href="#" className="text-white text-3xl font-semibold uppercase hover:text-gray-300"><img src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '150px' }} alt="interswitch Logo" /></a>
            <a
              className="ml-auto  flex-1 flex items-center"
              href="#"
            >
              <span className="iconify text-gray-400 text-2xl " data-icon="gg:menu-right"></span>
            </a>
          </div>
          <nav className="text-white text-base font-semibold ">
            <div className="flex flex-col ml-2 ">
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/admin">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Dashboard</span>
              </a>
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/add-new-user">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Add New User</span>
              </a>
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/create-blacklist">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Create BlackList</span>
              </a>
              
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/items">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>List of Items</span>
              </a>

              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/blacklisted-items">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>BlackListed Items</span>
              </a>
              {/* Other anchor elements */}
            </div>
          </nav>
        </aside>
      </section>
      <div class="container md:flex flex flex-wrap mt-6">
      
      <div class="w-full lg:w-2/6 h-52 pr-0 lg:px-4  md:ml-96 mt-52 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
                            <div class="welcome-boxes  p-5 ">               
                <div class="flex flex-row justify-between items-center capitalize">
                  <div class="h6 text-gray-700 font-semibold">New sign-ups</div>
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="54" height="54" rx="27" fill="#F6F6F6"/>
                      <path d="M35 36V34C35 32.9391 34.5786 31.9217 33.8284 31.1716C33.0783 30.4214 32.0609 30 31 30H23C21.9391 30 20.9217 30.4214 20.1716 31.1716C19.4214 31.9217 19 32.9391 19 34V36" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27 26C29.2091 26 31 24.2091 31 22C31 19.7909 29.2091 18 27 18C24.7909 18 23 19.7909 23 22C23 24.2091 24.7909 26 27 26Z" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>    
              </div>
              <div class="mt-8 flex justify-end">
                  <div class="">
                      <h1 class="h5 num-4 text-3xl font-light mr-4">0</h1>
                  </div>
                  
              </div>                
              </div>
              </div>

    </div>
    </div>
  );
}

export default AdminDashboard;






