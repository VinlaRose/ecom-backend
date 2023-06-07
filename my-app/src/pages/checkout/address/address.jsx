import React, { useContext, useState } from 'react';
import './address.css'
import { DataContext } from '../../../context/DataContext';

import { useNavigate } from 'react-router-dom';

export const AddressPage = () => {
const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const {addressData, setAddressData} = useContext(DataContext);

const [showAddress, setShowAddress] = useState(false)
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };




  const handleSave = () => {
    console.log('Address data:', addressData);
    setPopupOpen(false);
    setShowAddress(true);
  }

  const handleCancel = () => {
    // Reset the address data
    setAddressData({
      country: '',
      name: '',
      state: '',
      city: '',
      street: '',
      zipCode: '',
      mobile: '',
       
    });

    // Close the popup
    setPopupOpen(false);
    setShowAddress(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const confirmOrder = () => {
    navigate("/checkout")
    
  }

  

  const {name, street, city, zipCode, mobile, country} = addressData

  return (
    <div className='adress-container' style={{marginTop: "100px"}}>
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

            <label htmlFor="street">Street Number:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={addressData.street}
              onChange={handleInputChange}
            />

            <label htmlFor="zipCode">zipCode:</label>
            <input type="text" id="zipCode" name="zipCode" value={addressData.zipCode} onChange={handleInputChange} />

            <label htmlFor="mobile">Phone Number:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={addressData.mobile}
              onChange={handleInputChange}
            />

            <div>
              <button type="button" onClick={handleSave}>Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {
        showAddress && ( <> <div className="card">
        <div className="card-content">
          <h2>Your Address</h2>
          <p>To {name}, street No: {street}, {city}, {addressData.state}, {country}, zipcode: {zipCode} Mobile No: {mobile} </p>
        </div>
        <button onClick={handleCancel}>Delete Address</button>
        <button onClick={confirmOrder}>Confirm Order</button>
      </div>
     </>)
      }
    </div>
  );
};


