import "./navbar.css";
// import PersonIcon from '@mui/icons-material/Person';
import logofurnish from "../../images/logofurnish.PNG";
import { useContext, useReducer } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/Authentication/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";






export const NavBar = () => {
  const {state, dispatch} = useContext(DataContext);
 
  const {user, logoutHandler} = useContext(AuthContext);
  
 


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
        <NavLink to="/cart" className="icon">
          <div className="topBarIconItem">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          {
            state.cart?.length === 0 || state.cart?.length === undefined ? " " :  <span style={{color: "white"}} className="topbariconbadge">
            {state.cart.length}
          </span>
          }
         

          </div>
          
        </NavLink>
 
        <NavLink to="/fav" className="icon">
        <div className="topBarIconItem">
          <span className="material-symbols-outlined">
            favorite
          </span>

          
          {
            state.wishlist?.length === 0 || state.wishlist?.length === undefined ? " " : 

            
            
            <span style={{color: "white"}} className="topbariconbadge">
            {state.wishlist.length}
          </span>
          }
         

          </div>


         
        </NavLink>




        <NavLink to="/explore" className="icon"><span className="material-symbols-outlined">
shopping_bag
</span></NavLink>
        <NavLink to="/profile" className="icon"><span className="material-symbols-outlined">
person
</span></NavLink>

{
  user.encodedToken ? (<>
  {
  user.foundUser ? <p>{user.foundUser.firstName}</p> : <p>{user.createdUser.firstName}</p>
  }
  <button onClick={logoutHandler}>Logout</button>
  </>)
   : (<><NavLink to="/login">Login</NavLink> </>)
}

{/* {
  user.encodedToken ? (<p>{user.createdUser.firstName}</p>) : (<><NavLink to="/login">Login</NavLink> </>)
} */}





      </div>
    </nav>


    
        </div>
    )
}