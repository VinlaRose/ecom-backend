import React, { useContext, useState } from 'react';
import './CheckoutPage.css';
import { DataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';


export const CheckOut = () => {
const {state, addressData} = useContext(DataContext)
  const [discount, setDiscount] = useState('');
 
  const [showCouponModal, setShowCouponModal] = useState(false);
  const totalprice = state.cart.reduce((accumulator, currentItem) => {
    const price = currentItem.cartProduct.price;
    const quantity = currentItem.qty;
    return accumulator + price * quantity;
  }, 0);
  const [total, setTotal] = useState(totalprice);

  const handleApplyDiscount = (e) => {
    const selectedDiscount = e.target.value;

    

    // Calculate total amount based on the selected discount
    let calculatedTotal = 0;

    if (selectedDiscount === '20%') {
      calculatedTotal = (total * 0.8) + 100; // Apply 20% discount and add delivery charge
    } else if (selectedDiscount === '200') {
      calculatedTotal = total - 200 + 100; // Subtract 200 Rs discount and add delivery charge
    } else {
      calculatedTotal = total + 100; // No discount, just add delivery charge
    }

    setDiscount(selectedDiscount);
    setTotal(calculatedTotal);
    setShowCouponModal(false);
  };


  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  

  const handleButtonClick = () => {
    // Perform some action
    setIsButtonDisabled(false)
  };
  console.log(state.cart);
  console.log(addressData.country.length);
  const {name, street, city, zipCode, mobile, country} = addressData

  return (
    <div className="checkout-page">
      {
        addressData.country.length === 0 ? (<div className="address-card">
        <h1>Pease add your address</h1>
        <Link to="/address" >GO TO ADDRESS</Link>

    </div>) : (<div className="address-card">
          <h2>Your Address</h2>
          <p>To {name}, street No: {street}, {city}, {addressData.state}, {country}, zipcode: {zipCode} Mobile No: {mobile} </p>
        </div>)
      }
        
      <div className="order-card">
        <ul>
            {
                state.cart.map((item) => (<li key={item.cartProduct.item_id}>
                     <div className="order-details">
          <div className="order-column">
            <div>{item.cartProduct.name}</div>
            
          </div>
          <div className="order-column">
            <div>{item.qty}</div>
          </div>
          <div className="order-column">
            <div>{item.cartProduct.price}</div>
          </div>
        </div>

                </li>))
            }
        </ul>
       
        <div className="discount-coupon">
          <button className="apply-coupon-btn" onClick={() => setShowCouponModal(true)}>
            Apply Coupon
          </button>
          {showCouponModal && (
            <div className="coupon-modal">
              <label>
                <input
                  type="radio"
                  value="20%"
                  checked={discount === '20%'}
                  onChange={handleApplyDiscount}
                />
                Apply 20% Discount
              </label>
              <label>
                <input
                  type="radio"
                  value="200"
                  checked={discount === '200'}
                  onChange={handleApplyDiscount}
                />
                Apply Rs. 200 Discount (on orders greater than Rs. 700)
              </label>
              <button className="close-modal-btn" onClick={() => setShowCouponModal(false)}>
                Close
              </button>
            </div>
          )}
        </div>
        <div className="delivery-charge">
          Delivery Charge: Rs. 100
        </div>
        <div className="total-amount">
          Total Amount: Rs. {total}
        </div>
        <div className="checkout">
        <button className="checkout-button" disabled={isButtonDisabled} onClick={handleButtonClick}>
            CHECKOUT
        </button>
        {
            isButtonDisabled &&  <div className="checkoyt-msg">
                    please give your address first
            </div>
        }
       

        </div>

       
      </div>
    </div>
  );
};


