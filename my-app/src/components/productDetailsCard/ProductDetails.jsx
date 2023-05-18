import "./productDetails.css"
export const ProductDetails = ({item_id, name,image, price, category, short_description}) => {
    return (
        <div className="product-details-card" style={{marginTop: "100px"}}>
            <img className="productImg" src={image} alt=" " />
            <div className="imageDetails">
                <div className="productDetailsName">
                    <p className="name-detail">{name}</p>
                    <p className="description">{short_description}</p>
                    <p className="detailCategory">{category}</p>
                </div>
                <div className="productDetailPrice">
                    <div className="currency">Rs</div>
                    <div className="price">{price}</div>
                    
                </div>
                <div className="productQuantity">
                    <button className="ubstract">-</button>
                    <div className="quantity">0</div>
                    <button className="add">+</button>

                </div>
                <div className="addTo">
                    <button>Add to cart</button>
                    <button>Add to Favourite</button>
                </div>
            </div>
        </div>
    )
}