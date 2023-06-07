import { useContext} from "react"
import "./cart.css"
import { AuthContext } from "../../context/Authentication/AuthContext"
import { DataContext } from "../../context/DataContext"
import { Link } from "react-router-dom"




export const Cart = () => {
const {state,dispatch} = useContext(DataContext)
const {user} = useContext(AuthContext);
const{encodedToken} = user;



const increaseQuantity =  async (productId) => {
    try {
              
        const cartUpdate = await fetch(`/api/user/cart/${productId}`, 
        {
          method: 'POST',
          headers: {authorization : encodedToken},
          body: {
            action: {
                type: "increment"
                }
          }
          
        
        }
        )
        
        const cartData = await cartUpdate.json();
        
        dispatch({ type: 'FETCH_CART', payload: { cart: cartData.cart } })
        
        
       }
      catch(e){
       console.error(e)
       }
   
    
}

const decreaseQuantity =  async (productId) => {
    try {
              
        const cartUpdate = await fetch(`/api/user/cart/${productId}`, 
        {
          method: 'POST',
          headers: {authorization : encodedToken},
          body: {
            action: {
                type: "decrement"
                }
          }
          
        
        }
        )
        
        const cartData = await cartUpdate.json();
        
        dispatch({ type: 'FETCH_CART', payload: { cart: cartData.cart } })
        
        
       }
      catch(e){
       console.error(e)
       }
   
    
}

const deleteProduct = async (productId) => {

    try {
              
        const cartUpdate = await fetch(`/api/user/cart/${productId}`, 
        {
          method: 'DELETE',
          headers: {authorization : encodedToken},
          
          
        
        }
        )
        
        const cartData = await cartUpdate.json();
        
        dispatch({ type: 'FETCH_CART', payload: { cart: cartData.cart } })
        
        
       }
      catch(e){
       console.error(e)
       }
   

}


    

const totalPrice = state.cart?.reduce((accumulator, currentItem) => {
    const price = currentItem.cartProduct.price;
    const quantity = currentItem.qty;
    return accumulator + price * quantity;
  }, 0);
  
  

 
  const cartLength = state.cart?.length
  
   
    return(
        <div className="cartContainer">
        <img src="https://cdn.pixabay.com/photo/2017/09/04/18/51/ikea-2714998_1280.jpg" alt=""/>
       <div className="cartHeading"><h1>
        CART({cartLength})</h1></div>
        {
            cartLength === 0 ? (
                <div>
                    <h1>Cart is Empty</h1>
                    Buy something from <Link to="/explore" >Explore</Link>
                </div>
            ):
            (
                <div className="cartWrapper">
                <main>
                    
                    <ul>
                        {
                            state.cart?.map(({cartProduct, qty}) => (<li key={cartProduct.item_id}>
                                <div className="cart-product-card">
                            <div className="image-container-cart">
                                <img src={cartProduct.image} alt=""/>
                            </div>
                            <div className="cart-card-content">
                                <div className="product-name">{cartProduct.name}</div>
                                <div className="product-description">{cartProduct.short_description}</div>
                                <div className="product-price">Rs.{cartProduct.price}</div>
                                <div className="quantity-btns">
                                <button onClick={() => decreaseQuantity(cartProduct.item_id)} >-</button>
                                {qty}
                                <button onClick={() => increaseQuantity(cartProduct.item_id)}>+</button>
                                <div>
                                    <button onClick={() => deleteProduct(cartProduct.item_id)} >Delete from cart</button>
                                </div>
                            </div>
        
                            </div>
                            
                        </div>
                            </li>) )
                        }
                        </ul>
        
                           
                     
                </main>
                <aside>
                    
                    <div className="bill">
                        <div><h2>Price details</h2></div>
                        <div className="divider"></div>
        
                        <div className="products-in-bill">
                        {
                            state.cart?.map(({cartProduct, qty}) => (<li key={cartProduct.item_id}>
                                <div>
                         
                            <div className="each-product-in-bill" >
                                <div className="product-name">{cartProduct.name}</div>
                               
                                <div className="product-price-bill">Rs.{cartProduct.price}</div>
                               
        
                            </div>
                            
                            
        
                            
                        </div>
                            </li>) )
                        }
                        </div>
                       
                        <div>
                                Total: Rs.{totalPrice}
                            </div>
                            <div>
                                <Link to="/checkout">Place Order</Link>
                            </div>
                        
                    </div>
                   
                </aside>                
                </div>
            )

        }
       
      

    </div>
        
    )
}