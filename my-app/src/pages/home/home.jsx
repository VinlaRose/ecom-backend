import furniturePoster from "../../images/furniturePoster.jpg"
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { categories } from "../../backend/db/categories";

export const Home = () => {
    return (
        <div>
            <div className="poster">
        <img src={furniturePoster} alt = "" />
        <div className="text-overlay">
        <h1>Relax, sit back and Shop with us...</h1>
        <p>Your one stop destination to furnish your entire home.</p>
        
      </div>
      <button className="button-overlay">Explore</button>
    </div>
    <div className="categories">

      <ul>
        {
          categories.map(({id, categoryName, image}) => (<li style={{listStyle: "none"}} key={id}>
            <CategoryCard id={id} categoryName={categoryName} image={image} />
          </li >))
        }
      </ul>
    </div>
        </div>
    )
}