import React, { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";

export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const initialState = {
    products: [],
    filteredProducts: [],
    categories: [],
    sortOption: '',
    rating: '',  
    isChecked: false,
    selectedCategories: [],
}
  
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    const getData = async () => {
        try {
          const response = await fetch("api/products");
          const response2 = await fetch("api/categories")
          
          const data = await response.json();
          const categoriesdata = await response2.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: { products: data.products, categories: categoriesdata.categories } });
         }
        catch(e){
         console.log(e)
         }
        };

        getData();
},[])
    



  
  return (
    <DataContext.Provider
      value={{
      state, dispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

