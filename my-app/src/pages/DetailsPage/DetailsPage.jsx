import { useContext } from "react";
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/DataContext";
import { ProductDetails } from "../../components/productDetailsCard/ProductDetails";

export const DetailsPage = () => {

    const {productId} = useParams();
    const {data} = useContext(DataContext)
    const wantedData = data.filter((item) => item.item_id === Number(productId));
    console.log(wantedData)
    return(
        <div style ={{marginTop : "100px"}} className="detail-page-container">

        {
          wantedData.map(({item_id, name, image, category, price, short_description}) => (<div key={item_id}>
           <ProductDetails item_id = {item_id} name = {name} price={price} category={category} short_description={short_description} image={image}/> 
          </div >))
        }


                
        </div>
    )
}