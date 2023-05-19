import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";


export const Filters = () => {

     
    return(

        <div>
            <p className="filterHeading">
                <span className="filterPrice">PRICE</span>
                <button  className="clear">Clear</button>
            </p>
            <div className="sortingPrice">
                <h3>Price</h3>
                <div><input type="radio" value="highToLow" checked={sortOrder === "highToLow"}onChange={() => dispatch({type: "sortOrder", payload: "highToLow" })} /> High to Low</div>
                <div><input type="radio" value="lowToHigh" checked={sortOrder === "lowToHigh"} onChange={() => dispatch({type: "sortOrder", payload: "lowToHigh" })} /> Low to High</div>


            </div>
        </div>
        
    )
}