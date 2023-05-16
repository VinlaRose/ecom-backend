import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Link, Route, Routes } from "react-router-dom";
import { Cart } from "../src/pages/cart/cart";

import { Home } from "./pages/home/home";
import { Explore } from "./pages/exploreAll/explore";
import { Favourites } from "./pages/favourites/favourites";
import { Profile } from "./pages/profile/profile";
import MockAPI from "./MockAPI";


function App() {
  return (
    <div className="App">
     <NavBar/>
     
     <Routes>
      <Route path="/cart" element={<Cart/>} />
      <Route path="" element={<Home />} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/fav" element={<Favourites/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/mockapi" element={<MockAPI/>} />
     </Routes>

    </div>
  );
}

export default App;
