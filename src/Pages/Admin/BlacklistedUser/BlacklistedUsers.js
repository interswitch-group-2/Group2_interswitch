import React from 'react'

const BlacklistedUsers = () => {
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
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="admin_dashbord_welcome.html">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Dashboard</span>
              </a>
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="admin_dashbord_welcome.html">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Add New User</span>
              </a>
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="admin_dashbord_welcome.html">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Create BlackList</span>
              </a>
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="admin_dashbord_welcome.html">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>BlackList Items</span>
              </a>
              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="admin_dashbord_welcome.html">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>List of Items</span>
              </a>
              {/* Other anchor elements */}
            </div>
          </nav>
        </aside>
      </section>
      <div className="w-full h-32 mt-32 container sm:flex justify-center my-4">
      <table class="w-full text-sm text-left border text-gray-500 dark:text-gray-400">
  <thead class=" text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr class="capitalize">
          <th scope="col" class="p-2 px-4">
              <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
          </th>
          <th scope="col" class="py-2 px-6 inline-flex items-center">
               <span class="mr-2">Name of items</span>
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666656 5.49935L1.60666 6.43935L5.33332 2.71935V10.8327H6.66666V2.71935L10.3867 6.44602L11.3333 5.49935L5.99999 0.166016L0.666656 5.49935Z" fill="#A8B0B9"/>
                </svg>
                
          </th>
          <th scope="col" class="py-3 px-6">
              Category of items
          </th>
          <th scope="col" class="py-3 px-6">
              Reasons
          </th>
          <th scope="col" class="py-3 px-6">
              status
          </th>
          <th scope="col" class="py-3 px-6">
            actions
        </th>
        <th scope="col" class="py-3 px-6">
              date
          </th>
      </tr>
  </thead>
  <tbody>
      <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="p-4 w-4">
              <div class="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
              </div>
          </td>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Ayoade
          </th>
          <td class="py-4 px-6">
            <span class="py-2 px-3 bg-purple-500 rounded-lg text-white inset-4">unknown</span>
        </td>
          <td class="py-4 px-6 text-gray-900">
              info@gamil.com
          </td>
          <td class="py-4 px-6 text-gray-900">
            <span class="py-2 px-3 bg-red-500 rounded-lg text-white inset-4">blacklisted</span>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="font-medium inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline">
          <span>View</span>
        </a> 
      </td>
      <td class="py-4 px-6 text-gray-900">
              13-05-2021
          </td>

      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="p-4 w-4">
              <div class="flex items-center">
                  <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
              </div>
          </td>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Clement
          </th>
          <td class="py-4 px-6">
            <span class="py-2 px-3 bg-green-500 rounded-lg text-white inset-4">unknown</span>
        </td>
          <td class="py-4 px-6 text-gray-900">
              info@gamil.com
          </td>
          <td class="py-4 px-6 text-gray-900">
            <span class="py-2 px-3 bg-red-500 rounded-lg text-white inset-4">blacklisted</span>
        </td>
        <td class="py-4 px-6">
          <a href="#" class="font-medium inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline">
          <span>View</span>
        </a> 
      </td>
      <td class="py-4 px-6 text-gray-900">
              22-01-2022
          </td>
      </tr>
  </tbody>
</table>

      </div>
      </div>
  )
}

export default BlacklistedUsers