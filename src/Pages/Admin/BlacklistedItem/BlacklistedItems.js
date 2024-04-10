import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../Context/AuthContext';

const BlacklistedItems = () => {
  // const [blacklist, setBlacklist] = useState([]);
  const [blacklist, setBlacklist] = useState([
    {
      "id": 1,
      "name": "Item 1",
      "category": "Category A",
      "reason": "Reason 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "category": "Category B",
      "reason": "Reason 2"
    },
    {
      "id": 3,
      "name": "Item 3",
      "category": "Category C",
      "reason": "Reason 3"
    }
  ]);
  const [reason, setReason] = useState('');
  const { authTokens, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBlacklistedItems = async () => {
  //     try {
  //       const response = await fetch('api/blacklisted-items');
  //       const data = await response.json();
  //       setBlacklist(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching blacklisted items:', error);
  //     }
  //   };
  //   fetchBlacklistedItems();
  // }, []);

  // Initialize the reasons state with an empty string for each item in the blacklist
  const [reasons, setReasons] = useState(Array(blacklist.length).fill(''));

  const handleReasonChange = (e, index) => {
    const newReasons = [...reasons];
    newReasons[index] = e.target.value;
    setReasons(newReasons);
  };

  const handleRemoveFromBlacklist = async (itemId, index) => {
    try {
      const response = await fetch(`api/blacklisted-items/${itemId}/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens}`,
        },
        body: JSON.stringify({ reason: reasons[index] }),
      });

      if (response.ok) {
        setBlacklist((prevBlacklist) => prevBlacklist.filter((item) => item.id !== itemId));

        const updateResponse = await fetch(`api/items-list/${itemId}/update`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authTokens}`,
          },
          body: JSON.stringify(removedItem), // Include the removed item's data
        });

        if (!updateResponse.ok) {
          console.error('Failed to update items-list table:', updateResponse.statusText);
        }
      } else {
        console.error('Failed to remove item from blacklist:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing item from blacklist:', error);
    }
  };


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
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>List of Items</span>
              </a>

              <a className="inline-flex items-center w-full px-4 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="admin_dashbord_welcome.html">
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
              Reasons for Blacklisted
          </th>
          <th scope="col" class="py-3 px-6">
              Reasons for Removing from Blacklisted Items
          </th>
      </tr>
  </thead>
  <tbody>
  {blacklist.map((item, index) => (
              <tr key={item.id} className="bg-white border-b dark:bg-gray-500 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input id={`checkbox-table-search-${item.id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </td>
              <td className="py-4 px-6">
                <span className="py-2 px-3 bg-purple-500 rounded-lg text-white inset-4">{item.category}</span>
              </td>
              <td className="py-4 px-6 text-gray-900">
                {item.reason}
              </td>
              <td className="py-4 px-6">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleRemoveFromBlacklist(item.id, index);
                  }}>
                    <input
                      type="text"
                      value={reasons[index]}
                      onChange={(e) => handleReasonChange(e, index)}
                      className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
                      placeholder="Enter reason"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-3 py-1 ml-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                      Submit
                    </button>
                  </form>
                </td>
            </tr>
          ))}
  </tbody>
</table>

      </div>
      </div>
  )
}
export default BlacklistedItems;