import "./productCard.css"
export const ProductCard = ({name, price, image, category}) => {

  
return (
    <div className="productCardContainer">
        <div className="imageContainerProductCard">
            <img src={image} alt=""/>
            <div className="imageOverlay">
          <p className="imageText">View Product</p>
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