import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/DataContext";
import { ProductDetails } from "../../components/productDetailsCard/ProductDetails";
import { AuthContext } from "../../context/Authentication/AuthContext";
import { ProductCard } from "../../components/productCard/productCard";


export const DetailsPage = () => {
  const {user} = useContext(AuthContext);
  const {state} = useContext(DataContext)
  const {encodedToken} = user;
  console.log(state)

    const {productId} = useParams(); 

    const findProduct = state.products.filter((item) => item.item_id === Number(productId));
    console.log(findProduct)


    return(
        <div style ={{marginTop : "100px"}} className="detail-page-container">

        
        
        <ul>
        {
          findProduct.map(({item_id, name, image, category, price, inStock, fastDelivery, inFav}) => (<li key={item_id}>
            <ProductCard item_id={item_id} name={name} image={image} category={category} price={price} inStock={inStock} fastDelivery={fastDelivery} inFav={inFav} showDetailsPage={false}/>
          </li >))
        }
        </ul>

                
        </div>
    )
}