import "./navbar.css";
// import PersonIcon from '@mui/icons-material/Person';
import logofurnish from "../../images/logofurnish.PNG";
import { useContext, useReducer } from "react";
import { DataContext } from "../../context/DataContext";






export const NavBar = () => {
  const {state, dispatch} = useContext(DataContext);
  const handleSearchTermChange = event => {
    const searchTerm = event.target.value;
    dispatch({ type: "SEARCH", payload: searchTerm });
    
  };
    return (
        <div className="navbarContainer">
          <nav>
          <div className="navbar-left">
            <a href="/" className="logo"><img  src={logofurnish} alt=" " /></a>
          </div>


      <div className="navbar-middle">
        <input type="text" placeholder="Search" value={state.searchTerm}
        onChange={handleSearchTermChange} />
        <span type="submit" class="material-symbols-outlined">
          search
        </span>
      </div>


      <div className="navbar-right">
        <a href="/cart" className="icon"><span class="material-symbols-outlined">
shopping_cart
</span></a>
        <a href="/fav" className="icon"><span class="material-symbols-outlined">
favorite
</span></a>
        <a href="/explore" className="icon"><span class="material-symbols-outlined">
shopping_bag
</span></a>
        <a href="/profile" className="icon"><span class="material-symbols-outlined">
person
</span></a>


      </div>
    </nav>


    
        </div>
    )
}