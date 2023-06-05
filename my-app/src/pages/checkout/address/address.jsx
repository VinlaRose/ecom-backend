import React, { useContext, useState } from 'react';
import './address.css'
import { DataContext } from '../../../context/DataContext';
import { AuthContext } from '../../../context/Authentication/AuthContext';

export const AddressPage = () => {
    const {state, dispatch} = useContext(DataContext);
    const {user} = useContext(AuthContext);
    const {encodedToken} = user
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [addressData, setAddressData] = useState({
    country: '',
    name: '',
    state: '',
    city: '',
    streetNumber: '',
    pincode: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

//   const handleSave = () => {
//     // Save the address data to an object or perform desired action
//     console.log('Address data:', addressData);

//     // Close the popup
//     setPopupOpen(false);
//   };


  const handleSave = () => {
    console.log('Address data:', addressData);
    const addingToaddress = async () => {
      
      try {
     
        const response = await fetch("/api/user/address" , {
        method: 'POST',
        body:  JSON.stringify({address : {addressData}}),
        headers: {authorization : encodedToken}
      
      });
     
      }catch(e){
        console.error(e)
      }
    }
  
    addingToaddress();
  
    const getData = async () => {
      try {
        
        const addressResponse = await fetch("/api/user/address", {
          method: 'GET',
          headers: {authorization : encodedToken}
        
        })
        
        const addressData = await addressResponse.json();
        console.log(addressData);
        dispatch({ type: 'FETCH_ADDRESS', payload: { address: addressData.cart } })
        
        console.log("from state",state.address)
  
        
      
       }
      catch(e){
       console.error(e)
       }
      };
  
      getData();
  
    console.log(state)
    setPopupOpen(false);
  }

  const handleCancel = () => {
    // Reset the address data
    setAddressData({
      country: '',
      name: '',
      state: '',
      city: '',
      streetNumber: '',
      pincode: '',
      phoneNumber: '',
    });

    // Close the popup
    setPopupOpen(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  return (
    <div style={{marginTop: "100px"}}>
      <h1>Address Page</h1>
      <button onClick={openPopup}>Add New Address</button>

      {isPopupOpen && (
        <div style={{marginTop: "50px"}} className="popup">
          <h2>Add New Address</h2>
          <form>
            <label htmlFor="country">Country:</label>
            <select id="country" name="country" value={addressData.country} onChange={handleInputChange}>
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              {/* Add more countries as needed */}
            </select>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={addressData.name} onChange={handleInputChange} />

            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={addressData.state} onChange={handleInputChange} />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={addressData.city} onChange={handleInputChange} />

            <label htmlFor="streetNumber">Street Number:</label>
            <input
              type="text"
              id="streetNumber"
              name="streetNumber"
              value={addressData.streetNumber}
              onChange={handleInputChange}
            />

            <label htmlFor="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode" value={addressData.pincode} onChange={handleInputChange} />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={addressData.phoneNumber}
              onChange={handleInputChange}
            />

            <div>
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};


