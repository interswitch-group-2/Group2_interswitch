import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const ItemList = () => {
  const { authTokens, user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [reasons, setReasons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  };

  const handleBlacklistSubmit = async () => {
    try {


      // Clear selected items and reasons
      setSelectedItems([]);
      setReasons({});

    </div>
  );
};

export default ItemList;
