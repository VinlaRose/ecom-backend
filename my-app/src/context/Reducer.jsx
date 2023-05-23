import { useEffect, useReducer } from "react";



const initialState = {
    products: [],
    filteredProducts: [],
    categories: [],
    sortOption: '',
    rating: '',  
    isChecked: false,
    selectedCategories: [],
    searchTerm: ""
}

const sorter = (data, sortBy) => {
    if (sortBy === 'HIGH_TO_LOW') {
        return data.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'LOW_TO_HIGH') {
        return data.sort((a, b) => a.price - b.price);
    } else {
        return data;
    }
};

const inStocker = (data,  shouldFilter, sortBy) => {
    
    

    let newData;
    newData = sorter([...data], sortBy);
    

    if(shouldFilter === true){
       return [...newData].filter((item) => item.inStock === true)
    }else{
        return [...newData]
    }
    
    

}

const rater = (data, rated, sortBy, isInstock) => {

    let newData;
    newData = inStocker([...data],isInstock, sortBy)
    return newData.filter((item) => item.rating >= rated)

}

export const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
            ...state,
          products: action.payload.products,
          categories: action.payload.categories,
          filteredProducts: action.payload.products
        };
    case 'SORT':
        return {
          ...state,
          filteredProducts: sorter([...state.filteredProducts], action.payload),
          sortOption: action.payload,
        };
    case 'IN_STOCK': 
      return {
        ...state,
        filteredProducts: inStocker([...state.products], action.payload, state.sortOption),
        isChecked: !state.isChecked
        
      };
case 'RATING' :

    return{
        ...state,
        rating: action.payload,
        filteredProducts: rater([...state.products], action.payload, state.sortOption, state.isChecked)
    }
 
case 'CATEGORIZATION' :
    
    const selectedCategories = [...state.selectedCategories];
    if (selectedCategories.includes(action.payload)) {
      // Category is already selected, so remove it
      const index = selectedCategories.indexOf(action.payload);
      selectedCategories.splice(index, 1);
    } else {
      // Category is not selected, so add it
      selectedCategories.push(action.payload);
    }

    let filterCategorizedData;
    if(selectedCategories.length === 0){
    filterCategorizedData = state.products
        
    }else{
        filterCategorizedData = state.products.filter(product =>
            selectedCategories.includes(product.category))
    }
return { ...state,
         selectedCategories ,
        filteredProducts : filterCategorizedData}

case 'SEARCH' :
console.log(action.payload);
let filteredSearch = state.products.filter((item) => item.category.toLowerCase().includes(action.payload.toLowerCase()))
  return{ 
    ...state,
    searchTerm: action.payload,
    filteredProducts: filteredSearch
    
  }
 case 'CLEAR':
        return{
            ...state,
            filteredProducts: state.products,
        sortOption: null,
        isChecked: false,
        rating: null, 
        selectedCategories: [],
            
        }
    default:
        return state;
    }
  };