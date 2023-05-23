import React, { useContext, useReducer } from 'react';
import { DataContext } from '../../context/DataContext';


export const Filters = () => {
const {state, dispatch} = useContext(DataContext);
const { filteredProducts, sortOption, isChecked, rating, selectedCategories, categories } = state;



const handleShowOnlyInStock = (event) => {
    dispatch({type: "IN_STOCK", payload: event.target.checked })
};

  return (
    <div>
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
                                <input type="checkbox" value={item.categoryName} checked={selectedCategories.includes(item.categoryName)} onClick={(e)=>{dispatch({type: "CATEGORIZATION", payload: e.target.value})}}  />{item.categoryName}
                                
                            </div >
                        ))
                    }
                </ul>
                
                
                
            </div>
    </div>
  );
};


