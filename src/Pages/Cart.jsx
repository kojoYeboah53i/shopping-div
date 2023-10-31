// import React from 'react'

import Navbar from "../components/navbar";

const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item">
          <div className="cart-item-image">
            <img src="https://picsum.photos/200/300" alt="item" srcSet="item" />
          </div>
          <div className="cart-item-details">
            <p className="cart-item-name">Item Name</p>
            <p className="cart-item-price">$ 100</p>
          </div>
          <div className="cart-item-quantity">
            <button className="cart-item-quantity-btn">-</button>
            <input type="text" className="cart-item-quantity-input" value="1" />
            <button className="cart-item-quantity-btn">+</button>
          </div>
          <div className="cart-item-remove">
            <button className="cart-item-remove-btn">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cart-total">
        <p className="cart-total-text">Total</p>
        <p className="cart-total-price">$ 100</p>
      </div>
      <div className="cart-checkout">
        <button className="cart-checkout-btn">Checkout</button>
      </div>
      </div>
    </>
  )
}

export default Cart;