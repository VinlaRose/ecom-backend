import { Link } from "react-router-dom"
import "./productCard.css"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { AuthContext } from "../../context/Authentication/AuthContext"

export const ProductCard = ({name, price, image, category, item_id, inStock, fastDelivery, inFav, showDetailsPage, showDeleteWishList}) => {
  const {state,dispatch, handleAddToCart, handleAddToWishlist} = useContext(DataContext);
  const {user} = useContext(AuthContext);
  const {encodedToken} = user;


  const handleRemoveFromWishlist = async (productId) => {
    

    try {
              
        const wishlistUpdate = await fetch(`/api/user/wishlist/${productId}`, 
        {
          method: 'DELETE',
          headers: {authorization : encodedToken},
          
          
        
        }
        )
        
        const wishlistData = await wishlistUpdate.json();
        
        
        dispatch({ type: 'FETCH_WISHLIST', payload: { wishlist: wishlistData.wishlist } })
        
        
       }
      catch(e){
       console.error(e)
       }
   
  
  }

  
return (
    <div className="productCardContainer">
        <div className="imageContainerProductCard">
        <Link to={`/product/${item_id}`}><img src={image} alt=""/></Link>
            <div className="imageOverlay">
          
          {
            showDetailsPage && <Link to={`/product/${item_id}`}> <p className="imageText">View details</p> </Link>
          }
        </div>
        </div>
        <div className="productDetails">
        <p className="productName">{name}</p>
        <p className="productType">{category}</p>
        <p className="productPrice"> <span>Rs.</span> {price}</p>
        {inStock === false && "Out of stock"}
        <br/>
        {fastDelivery  && "Fast delivery available"}

        </div>
       


        <div className="productCardIcons">
  <div className="addTocart" onClick={() => handleAddToCart(item_id)}>
    <span class="material-symbols-outlined">add_shopping_cart</span>
  </div>

 
      <div className="addtofav" onClick={() =>  handleAddToWishlist(item_id) }>
    <span className="material-symbols-outlined">heart_plus</span>
  </div>

  {
    showDeleteWishList && <button onClick={() =>  handleRemoveFromWishlist(item_id)}>DELETE from Wishlist  </button>
  }

   
  
</div>

    </div>
)
}