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
    <div>
        {isPermitted ? (<form onSubmit={handleBlacklistSubmit}>
            <input type="text" id='item' placeholder='Item Name'/>
            <input type="text" id='item' placeholder='Category'/>
            <input type="text" id='reasons' placeholder='Reason for blacklist'/>
            <button type='submit' class="w-full text-white 
                    bg-blue-300 hover:bg-black-700 focus:ring-4 
                    focus:outline-none focus:ring-primary-300 
                    font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                    dark:focus:ring-primary-800" >Blacklist Item</button>
        </form>) : (<p>You are not permitted to see this page</p>) }
    </div>
  )
}

export default CreateBlacklist