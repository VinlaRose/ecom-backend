import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import { AuthContext } from "./Authentication/AuthContext";

export const DataContext = createContext();

export const  initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  cart:[],
  sortOption: '',
  rating: '',  
  isChecked: false,
  selectedCategories: [],
  
}
export const DataProvider = ({ children }) => {
  
const {user} = useContext(AuthContext);
const {encodedToken, foundUser} = user;

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    const getData = async () => {
        try {
          const response = await fetch("api/products");
          const response2 = await fetch("api/categories");
          const cartResponse = await fetch("/api/user/cart", {
            method: 'GET',
            headers: {authorization : encodedToken}
          
          })
          
          
          const data = await response.json();
          const categoriesdata = await response2.json();
          
          dispatch({ type: 'FETCH_SUCCESS', payload: { products: data.products, categories: categoriesdata.categories } });

          const cartData = await cartResponse.json();
          dispatch({ type: 'FETCH_CART', payload: { cart: cartData.cart } })
          

          
          }

         
        catch(e){
         console.log(e)
         }
        };

        getData();
      
},[encodedToken])


const handleAddToCart = (id) => {
  const addingToCart = async (id) => {
    const cartProduct = state.products.find((item) => item.item_id === Number(id));
    try {
   
      const response = await fetch("/api/user/cart" , {
      method: 'POST',
      body:  JSON.stringify({product : {cartProduct}}),
      headers: {authorization : encodedToken}
    
    });
   
    }catch(e){
      console.error(e)
    }
  }

  addingToCart(id);

  const getData = async () => {
    try {
      
      const cartResponse = await fetch("/api/user/cart", {
        method: 'GET',
        headers: {authorization : encodedToken}
      
      })
      
      const cartData = await cartResponse.json();
      console.log(cartData);
      dispatch({ type: 'FETCH_CART', payload: { cart: cartData.cart } })
      
      console.log(state.cart)

      
    
     }
    catch(e){
     console.error(e)
     }
    };

    getData();

  console.log(state)

}





const handleAddToWishlist = (id) => {
  const addingToWishlist = async (id) => {
    const wishListProduct = state.products.find((item) => item.item_id === Number(id));
    try {
   
      const response = await fetch("/api/user/wishlist" , {
      method: 'POST',
      body:  JSON.stringify({product : wishListProduct}),
      headers: {authorization : encodedToken}
    
    });
    
  
      const cart = await response.json();
      console.log("added to wishlist", cart);
      
     
   
    }catch(e){
      console.error(e)
    }
  }

 addingToWishlist(id) 


  const getWishlistData = async () => {
    try {
      
      const wishlistResponse = await fetch("/api/user/wishlist", {
        method: 'GET',
        headers: {authorization : encodedToken}
      
      })
      
      const wishlistData = await wishlistResponse.json();
      dispatch({ type: 'FETCH_WISHLIST', payload: { wishlist: wishlistData.wishlist } }) 
    
     }
    catch(e){
     console.error(e)
     }
    };

    getWishlistData();
}


  
  return (
    <DataContext.Provider
      value={{
      state, dispatch, handleAddToCart, handleAddToWishlist
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

