import React from 'react'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../Context/AuthContext';


const ItemList = () => {
  const { authTokens, user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [reasons, setReasons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch('/api/items', {
//           headers: {
//             Authorization: `Bearer ${authTokens}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch items');
//         }

//         const data = await response.json();
//         setItems(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, [authTokens]);

const fetchItems = async () => {
    try {
    // Simulate fetching items (replace with actual fetch call)
    const testItems = [
        {
        id: 1,
        name: "Test Item 1",
        description: "This is a test item for testing purposes.",
        category: "Test Category 1"
        },
        {
        id: 2,
        name: "Test Item 2",
        description: "This is a test item for testing purposes.",
        category: "Test Category 2"
        },
        {
        id: 3,
        name: "Test Item 3",
        description: "This is a test item for testing purposes.",
        category: "Test Category 3"
        }
    ];
    
    // Update the items state with the test items
    setItems(testItems);
    setLoading(false);
    } catch (error) {
    setError(error.message);
    setLoading(false);
    }
};

fetchItems();
}, []);

  const handleCheckboxChange = (itemId) => {
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];
    setSelectedItems(updatedSelectedItems);
  };

  const handleReasonChange = (itemId, reason) => {
    setReasons((prevReasons) => ({
      ...prevReasons,
      [itemId]: reason,
    }));
  };

  const handleBlacklistSubmit = async () => {
    try {
      const response = await fetch('/api/blacklist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authTokens}`,
        },
        body: JSON.stringify({ items: selectedItems, reasons }),
      });

      if (!response.ok) {
        throw new Error('Failed to blacklist items');
      }

      // Remove blacklisted items from the items list
      const updatedItems = items.filter((item) => !selectedItems.includes(item.id));
      setItems(updatedItems);

      // Clear selected items and reasons
      setSelectedItems([]);
      setReasons({});
    } catch (error) {
      setError(error.message);
    }
  };

//   const isPermitted = user.isAdmin || user.isBlacklisted
const isPermitted = true
  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span>{item.name}</span>
            <input
              type="text"
              value={reasons[item.id] || ''}
              placeholder="Reason for blacklisting"
              onChange={(e) => handleReasonChange(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      {isPermitted && (
        <button onClick={handleBlacklistSubmit}>Blacklist Selected Items</button>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default ItemList;