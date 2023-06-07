import { useContext } from "react"
import "./wishlist.css"
import { DataContext } from "../../context/DataContext"

import { ProductCard } from "../../components/productCard/productCard"


export const Wishlist = () => {
const {state} = useContext(DataContext)




// useEffect(()=>{
//         const getData = async () => {
//             try {
              
//               const wishlistResponse = await fetch("/api/user/wishlist", {
//                 method: 'GET',
//                 headers: {authorization : encodedToken}
              
//               })
              
//               const wishlistData = await wishlistResponse.json();
//               dispatch({ type: 'FETCH_WISHLIST', payload: { wishlist: wishlistData.wishlist } }) 
            
//              }
//             catch(e){
//              console.error(e)
//              }
//             };
    
//             getData();
           
          
//     },[]);

  


    return(
        <div className="wishlistContainer">
        <img src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
       <div className="cartHeading"><h1>
        Wishlist</h1></div>
        {
          state.wishlist?.length === 0 || state.wishlist?.length === undefined ? <div>Empty wishlist..</div> :  <div className="wishlist-products-container">
            <ul>
            {
              state.wishlist.map(({name, item_id, image, price, category, inStock, fastDelivery, rating}) => (
                <li key={item_id}>
                  <ProductCard item_id={item_id} name={name} image={image} category={category} price={price} inStock={inStock} fastDelivery={fastDelivery} rating={rating} showDeleteWishList={true}/>
                </li>
              ))
            }
            </ul>
          </div>
        }

    </div>
        
    )
}