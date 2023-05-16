import "./productDetails.css"
export const ProductDetails = () => {
    return (
        <div className="product-details-card" style={{marginTop: "100px"}}>
            <img className="productImg" src={"https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=61"} alt=" " />
            <div className="imageDetails">
                <div className="productDetailPrice">price</div>
                <div className="productQuantity">

                </div>
            </div>
        </div>
    )
}