import { useContext } from "react";
import { useState  } from 'react';
import CategoryReel from "../../components/categoryReel/categoryReel"
import { ProductCard } from "../../components/productCard/productCard"
import "./explore.css"
import { DataContext } from "../../context/DataContext"
import { Filters } from "../../components/filters/Filter";





export const Explore = () => {
    const {state, showAlert, showWishlistAlert} = useContext(DataContext);
    const { filteredProducts} = state;

    const[showFilter, setShowFilter] = useState(false)

    
   
   
    return(
        <div className="exploreContainer">
            {showAlert && <div className="alert">Product added to cart!</div>}
            {showWishlistAlert && <div className="alert">Product added to Wishlist!</div>}
            
            <img className="exploreFrontImage" src="https://cdn.pixabay.com/photo/2017/08/07/16/39/living-room-2605530_960_720.jpg" alt =" " />

            <div className="categoryReelContainer">
                <CategoryReel/>
            </div>

            <button className="filterBtn" onClick={() => setShowFilter(!showFilter)}>{showFilter === false ? "Show Filter" : "Hide Filter"}</button>

           

            <div className="exploreMain">

            {showFilter === true && (
                <div className="filters-mobile">
                <Filters/>
            </div>
            )}

                <div className="exploreLeft">
                    <div className="filters">
                        <Filters/>    
                    </div>
                </div>



                <div className="exploreRight">
                <ul>
        {
          filteredProducts.map(({item_id, name, image, category, price, inStock, fastDelivery, inFav, rating}) => (<li key={item_id}>
            <ProductCard item_id={item_id} name={name} image={image} category={category} price={price} inStock={inStock} fastDelivery={fastDelivery} inFav={inFav} rating= {rating} showDetailsPage={true}/>
          </li >))
        }
        </ul>
                </div>
            </div>
            
        </div>
        
    )
}