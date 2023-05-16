
import "./CategoryCard.css"

export const CategoryCard = ({id, categoryName, image}) => {
    return(
        <div className="categoryContainer">
          <img src={image} alt="" />  
          <div className="textCategory">
            <h1>{categoryName}</h1>
          </div>
          
        </div>
        

    )
}