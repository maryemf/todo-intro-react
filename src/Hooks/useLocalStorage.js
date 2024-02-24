import React from 'react';

// Custom hook for using localStorage
function useLocalStorage(itemName, initialValue) { 
  const[item, setItem] = React.useState(initialValue);
  const[loading, setLoading] = React.useState(true);
  const[error, setError] = React.useState(false);
      // const localStorageItem = localStorage.getItem(itemName);
    // let parsedItem;
    React.useEffect(()=> {
      setTimeout(() => {
        try {
          const parsedItem = JSON.parse(localStorage.getItem(itemName)) || initialValue;
          setItem(parsedItem);
        } catch (e) {
          setLoading(false);
          setError(true); //si se envia el error que sea algo entendible por el usuario
        }
        setLoading(false);
      }, 2000);
    }, [itemName, initialValue])


    
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    }
    return {item, saveItem, loading, error};
}

export {useLocalStorage};