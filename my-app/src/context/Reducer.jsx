

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

const priceRanger = (data, range,  sortBy, isInstock) => {

  let newData;
  newData = inStocker(data,isInstock, sortBy )

  return  newData.filter((item) => item.price < Number(range))

 

  

}

const rater = (data,rated, priceRange, sortBy, isInstock) => {


    let newData;
    newData = priceRanger([...data],priceRange,sortBy, isInstock)
    return newData.filter((item) => item.rating >= rated);

    

}







export const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
            ...state,
          products: action.payload.products,
          categories: action.payload.categories,
          filteredProducts: action.payload.products,
          
        };

      case 'FETCH_CART':
        return{
          ...state,
          cart: action.payload.cart,
         
        };

      case 'FETCH_WISHLIST':
        return{
          ...state,
          wishlist: action.payload.wishlist
        };
        case 'FETCH_ADDRESS':
        return{
          ...state,
          address: action.payload.address 
        };
      
        
    case 'SORT':
        return {
          ...state,
          filteredProducts: sorter([...state.filteredProducts], action.payload),
          sortOption: action.payload,
        };
        case 'PRIZE_RANGE':
        return {
          ...state,
          filteredProducts: priceRanger([...state.filteredProducts], action.payload, state.sortOption, state.isChecked ),
          priceRange: action.payload,
        };
    case 'IN_STOCK': 
      return {
        ...state,
        filteredProducts: inStocker([...state.filteredProducts], action.payload, state.sortOption),
        isChecked: !state.isChecked
        
      };
case 'RATING' :

    return{
        ...state,
        rating: action.payload,
        filteredProducts: rater([...state.products], action.payload, state.priceRange, state.sortOption, state.isChecked)
    }
 
case 'CATEGORIZATION' :
    
    const selectedCategories = [...state.selectedCategories];
    if (selectedCategories.includes(action.payload)) {
      
      const index = selectedCategories.indexOf(action.payload);
      selectedCategories.splice(index, 1);
    } else {
     
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
        filteredProducts : rater(filterCategorizedData, state.rating, state.sortOption, state.isChecked )}






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
        priceRange: 6600,
            
        }
    default:
        return state;
    }
  };