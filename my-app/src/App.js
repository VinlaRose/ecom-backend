import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Link, Route, Routes } from "react-router-dom";
import { Cart } from "../src/pages/cart/cart";

import { Home } from "./pages/home/home";
import { Explore } from "./pages/exploreAll/explore";
import { Favourites } from "./pages/favourites/favourites";
import { Profile } from "./pages/profile/profile";
import MockAPI from "./MockAPI";
import { GettingDataCheck } from "./pages/getdata";
import { ProductDetails } from "./components/productDetailsCard/ProductDetails";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { TrialPage } from "./trialPage";


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
      <Route path="/trial" element={<GettingDataCheck/>} />
      <Route path="/productDetailCard" element={<ProductDetails/>} />
      <Route path="/product/:productId" element={<DetailsPage/>} />
      <Route path = "trialpage" element={<TrialPage/>}/>
     </Routes>

    </div>
  );
}

export default App;
