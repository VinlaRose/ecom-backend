import "./navbar.css";
// import PersonIcon from '@mui/icons-material/Person';
import logofurnish from "../../images/logofurnish.PNG";






export const NavBar = () => {
    return (
        <div className="navbarContainer">
          <nav>
          <div className="navbar-left">
            <a href="/" className="logo"><img  src={logofurnish} alt=" " /></a>
          </div>


      <div className="navbar-middle">
        <input type="text" placeholder="Search" />
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