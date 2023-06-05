import { useEffect, useReducer } from "react";



const initialState = {
    products: [],
    filteredProducts: [],
    cartProducts: [],
    categories: [],
    sortOption: '',
    rating: '',  
    isChecked: false,
    selectedCategories: [],
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





const reducer = (state, action) => {
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


export const TrialPage = () => {
  
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

    const { filteredProducts, sortOption, isChecked, rating, selectedCategories, categories } = state;
    
    const handleShowOnlyInStock = (event) => {
        
        
        dispatch({type: "IN_STOCK", payload: event.target.checked })
      };
      console.log("state", state)
    return (
        <div style={{marginTop: "100px"}}>
           
            <button onClick={() => dispatch({type: "CLEAR"})}>CLEAR FILTERS</button>
            <br/>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={handleShowOnlyInStock}
          /> Show in stock items only
          <br/>

            <div>
            <input type="radio" value={"HIGH_TO_LOW"} checked={sortOption==="HIGH_TO_LOW"} onClick={(e) => {
                dispatch({type: "SORT", payload: e.target.value})
            }}/> HIGH TO LOW
            <input type="radio" value={"LOW_TO_HIGH"} checked={sortOption==="LOW_TO_HIGH"} onClick={(e) => {
                dispatch({type: "SORT", payload: e.target.value})
            }}/> LOW TO HIGH

            </div>


            <div>
            RATINGS: <input type="radio" value={4} checked={rating==='4'}  onClick={(e) => {dispatch({type:"RATING", payload: e.target.value})}} /> 4 ABOVE
            <input type="radio" value={3} checked={rating==='3'}  onClick={(e) => {dispatch({type:"RATING", payload: e.target.value})}} />3 ABOVE
            <input type="radio" value={2} checked={rating==='2'}  onClick={(e) => {dispatch({type:"RATING", payload: e.target.value})}} />2 ABOVE
            <input type="radio" value={1} checked={rating==='1'}  onClick={(e) => {dispatch({type:"RATING", payload: e.target.value})}} />1 ABOVE
            </div>
            
            <div className="categories">
                <ul style={{listStyle:"none"}}>
                    {
                        categories.map((item) => (
                            <div key={item.id} >
                                <input type="checkbox" value={item.categoryName} checked={selectedCategories.includes(item.categoryName)} onClick={(e)=>{dispatch({type: "CATEGORIZATION", payload: e.target.value})}} />{item.categoryName}
                                
                            </div >
                        ))
                    }
                </ul>
                
                
                
            </div>


        <ul style={{display: "flex", flexWrap: "wrap"}}>
            
            
            {
                
                filteredProducts.map(({name, rating, category, image, inStock, fastDelivery, item_id,short_description, price}) => (
                    <div key={item_id} style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        marginBottom: '10px',
                      }}>
                    <div>
                      <img src={image} alt={name} style={{
    width: '100px',
    height: "100px",
    marginBottom: '10px',
  }} />
                    </div>
                    <div>
                      <h3>{name}</h3>
                      <p>{category}</p>
                      <p>{short_description}</p>
                      <p>Price: {price}</p>
                      <p>Rating: {rating}</p>
                      <p style={{
    color: inStock ? 'green' : 'red',
    fontWeight: 'bold',
    marginBottom: '5px',
  }}>
                        {inStock ? 'In Stock' : 'Out of Stock'}
                      </p>
                      <p style={{
    color: fastDelivery ? 'green' : 'gray',
    marginBottom: '5px',
  }}>
                        {fastDelivery ? 'Fast Delivery Available' : 'Standard Delivery'}
                      </p>
                    </div>
                  </div>
                ))
            }
        </ul>

        </div>
    )
}