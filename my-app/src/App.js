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
import { LoginPage } from "./pages/login/Login";
import { useContext, useState } from "react";
import { RequiresAuth } from "./context/Authentication/RequireAuth";
import { AuthContext } from "./context/Authentication/AuthContext";
import { SignUp } from "./pages/signup/signup";
import { Wishlist } from "./pages/wishlist/wishlist";
import { CheckOut } from "./pages/checkout/checkout";
import { AddressPage } from "./pages/checkout/address/address";

function App() {
 
  return (
    <div className="App">
      <NavBar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/mockapi" element={<MockAPI />} />
        <Route path="/trial" element={<GettingDataCheck />} />
        <Route path="/productDetailCard" element={<ProductDetails />} />
        <Route path="/product/:productId" element={<DetailsPage />} />
        <Route path="/trialpage" element={<TrialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp/>} />
        

        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
         <Route
          path="/fav"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
         <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <CheckOut />
            </RequiresAuth>
          }
        />
        <Route
          path="/address"
          element={
            <RequiresAuth>
              <AddressPage />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
