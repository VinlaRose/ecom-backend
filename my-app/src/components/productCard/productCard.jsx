import { Link } from "react-router-dom"
import "./productCard.css"

export const ProductCard = ({name, price, image, category, item_id}) => {

  
return (
    <div className="productCardContainer">
        <div className="imageContainerProductCard">
        <Link to={`/product/${item_id}`}><img src={image} alt=""/></Link>
            <div className="imageOverlay">
          <Link to={`/product/${item_id}`}> <p className="imageText">View details</p> </Link>
        </div>
        </div>
        <div className="productDetails">
        <p className="productName">{name}</p>
        <p className="productType">{category}</p>
        <p className="productPrice"> <span>Rs.</span> {price}</p>

        </div>
       


        <div className="productCardIcons">
  <div className="addTocart">
    <span class="material-symbols-outlined">add_shopping_cart</span>
  </div>

  <div className="addtofav">
    <span class="material-symbols-outlined">heart_plus</span>
  </div>
</div>

    </div>
)
}