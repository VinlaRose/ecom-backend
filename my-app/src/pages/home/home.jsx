import furniturePoster from "../../images/furniturePoster.jpg"
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { categories } from "../../backend/db/categories";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const Home = () => {
 let navigate = useNavigate();

 const {dispatch} = useContext(DataContext)

  const displayCtegoryItems = (categoryName) => {

    dispatch({ type: "CATEGORIZATION", payload: categoryName });
    
    navigate("/explore")
  }
    return (
        <div>
            <div className="poster">
        <img src={furniturePoster} alt = "" />
        <div className="text-overlay">
        <h1>Relax, sit back and Shop with us...</h1>
        <p>Your one stop destination to furnish your entire home.</p>
        
      </div>
      <button className="button-overlay" onClick={() => {navigate("/explore")}}>Explore</button>
    </div>
    <div className="categories">

      <ul>
        {
          categories.map(({id, categoryName, image}) => (<li style={{listStyle: "none"}} key={id} onClick={() => displayCtegoryItems(categoryName)}>
            <CategoryCard id={id} categoryName={categoryName} image={image} />
          </li >))
        }
      </ul>
    </div>
        </div>
    )
}