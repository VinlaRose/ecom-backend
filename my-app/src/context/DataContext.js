import React, { createContext, useEffect, useState, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const reqData = await response.json();
      setData(reqData.products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [sortOrder, setSortOrder] = useState();

  const reducer = (state, action) => {
    switch (action.type) {
      case "sorting":
        let sortedState;

        if (action.payload === "descending") {
          sortedState = [...data].sort((a, b) => b.price - a.price);
        } else if (action.payload === "ascending") {
          sortedState = [...data].sort((a, b) => a.price - b.price);
        } else {
          sortedState = state;
        }

        return sortedState;
    case "clearFilter" :
        return data
      default:
        return state;
    }
  };

  const [items, dispatch] = useReducer(reducer, data);

  const handleSorting = (e) => {
    setSortOrder(e.target.value);
    dispatch({ type: "sorting", payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: "sorting", payload: sortOrder });
  }, [sortOrder]);

  const clearFilter = () => {
    setSortOrder(" ");
    dispatch({ type: "clearFilter" });
  
  }
console.log("data", data)
console.log("items", items)
  

  return (
    <DataContext.Provider value={{ data, handleSorting, sortOrder, clearFilter }}>
      {children}
    </DataContext.Provider>
  );
};
