import React from 'react'
import { useState, useContext } from 'react'
import AuthContext from '../../../Context/AuthContext'


const CreateBlacklist = () => {
    const { authTokens, user } = useContext(AuthContext);
    

    const handleBlacklistSubmit = async (e) => {
      e.preventDefault();
  
      const itemValue = e.target.item.value;
      const category = e.target.category.value;
      const reasons = e.target.reasons.value;
  
      try {
          // Fetch the list of items
          const listItemsResponse = await fetch('/api/items', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${authTokens.access}`,
              },
          });
  
          if (!listItemsResponse.ok) {
              throw new Error('Failed to fetch list of items');
          }
  
          const listItems = await listItemsResponse.json();
          const itemIndex = listItems.findIndex(item => item.name === itemValue && item.category === category);
  
          if (itemIndex === -1) {
              throw new Error('Item not found in the list');
          }
  
          // Delete the item from the list
          const updatedListItems = [...listItems.slice(0, itemIndex), ...listItems.slice(itemIndex + 1)];
  
          // Post the updated list of items back to the database (this is just a placeholder, you need to implement the actual logic)
          const updateListItemsResponse = await fetch('/api/items', {
              method: 'PUT', // Use PUT method to update the list of items
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${authTokens.access}`,
              },
              body: JSON.stringify(updatedListItems),
          });
  
          if (!updateListItemsResponse.ok) {
              throw new Error('Failed to update list of items');
          }
  
          // Post the new form value to the blacklist database
          const response = await fetch('/api/blacklist', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${authTokens.access}`,
              },
              body: JSON.stringify({ itemValue, category, reasons }),
          });
  
          if (!response.ok) {
              throw new Error('Failed to blacklist item');
          }
  
          // If successful, update the UI or navigate to another page
          // For example, show a success message or navigate back to the item list page
      } catch (error) {
          console.error('Error blacklisting item:', error);
          setError(error.message);
          // Display error message to the user
      }
  };
  //const isPermitted = user.isAdmin || user.isBlacklisted
  const isPermitted = true;
  return (
    <>
    <div className="container md:flex">
    <section className="left-panel">
        <aside className="relative bg-sidebar bg-black h-full w-64 hidden sm:block shadow-xl" x-show="isOpen()">
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
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/admin">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Dashboard</span>
              </a>
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/add-new-user">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Add New User</span>
              </a>
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/create-blacklist">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#798BB4" stroke-width="1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Create BlackList</span>
              </a>
              
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/items">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>List of Items</span>
              </a>

              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/blacklisted-items">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#798BB4" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>BlackListed Items</span>
              </a>
              {/* Other anchor elements */}
            </div>
          </nav>
        </aside>
      </section>

       <div class="w-full my-[32%] justify-center flex-col flex-wrap md:ml-96 mt-52 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                             


      <form class="max-w-sm mx-auto">
        <div class="text-2xl text-center">
          <span>Create Blacklist</span>
        </div>
  <div class="mb-5">
    <label for="Name of Item" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of item</label>
    <input type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name of item" required />
  </div>
  <div class="mb-5">
    <label for="Name of Category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category of Item</label>
    <input type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Reason" required></textarea>
<div class="mt-5">
<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">sumit</button>
</div>
</form>
</div>

    </div>
</>
  )
}

export default CreateBlacklist





