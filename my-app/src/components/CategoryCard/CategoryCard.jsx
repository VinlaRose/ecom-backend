
import { useContext } from "react"
import "./CategoryCard.css"
import { DataContext } from "../../context/DataContext"

export const CategoryCard = ({id, categoryName, image}) => {
  const {state, dispatch} = useContext(DataContext)
    return(
        <div className="categoryContainer">
          <img src={image} alt="" />  
          <div key={id} className="textCategory">
            <h1>{categoryName}</h1>
          </div>
          
        </div>
        

    )
}