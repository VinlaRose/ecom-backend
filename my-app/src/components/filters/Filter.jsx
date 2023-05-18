import { useContext, useEffect, useReducer, useState } from "react";
import { DataContext } from "../../context/DataContext";



export const Filters = () => {
    const {sortOrder, state, clearFilter, handleSorting} = useContext(DataContext);
    
    

    
   
    
    return(

        <div>
            <p className="filterHeading">
                <span className="filterPrice">PRICE</span>
                <button onClick={clearFilter} className="clear">Clear</button>
            </p>
            <div className="sortingPrice">
                <h3>Price</h3>
                <div><input type="radio" value="descending" checked={sortOrder === "descending"} onChange={handleSorting} /> High to Low</div>
                <div><input type="radio" value="ascending" checked={sortOrder === "ascending"} onChange={handleSorting} /> Low to High</div>
               
            </div>
        </div>
        
    )
}