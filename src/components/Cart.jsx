/* eslint-disable react/prop-types */
// import React from 'react'
import {  useEffect, useState } from "react";
import styled from "styled-components";
// import { CartContext } from "../Context/CartContext";
import axios from "axios";

export const Cart = ({user}) => {
  // const { items, setitems} = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);


   console.log("user", user)



    const CartList = styled.div`

    width: 95%;
    height: 90vh;
    margin: 0.6rem;
    margin-top: 0;
    display:flex;
    flex-direction: column;
    row: 0.3rem;
    overflow: hidden;
    overflow-y: hidden;
    padding: 0.5rem 1rem; 
    border-radius: 0.8rem;
    `;

    const CartUl = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    list-style: none;
    width: 100%;
    padding: 0.4rem 0.8rem;
    color: black; 
    position: relative;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 1rem;
    `;
  // eslint-disable-next-line react/prop-types
  const CartArea = ({id}) => {
    console.log('user is logged in with id ' + id)

    console.log('cartItems')
    console.log(cartItems)
    useEffect(() => {
      (async function() {
      const newCart = await axios.get(`${import.meta.env.VITE_REMOTE_API_URL}/getCartwithUserId/${id}`)
      
      setCartItems(newCart)
      })();// 
      return () => {
        console.log("cleaning up cart component")
      }
     }, [id])


    return (   <> 
      {/* {cartItems.map((item) => (  
          <div className="flex justify-between items-center" key={item.id}>
          <div className="flex items-center w-full p-2">
            <div className="w-full flex justify-between items-center p-2 mx-auto">
              <span className="text-lg font-bold">{item.name}</span>
              <span className="text-sm">{item.price}</span>
            </div>
          </div>
        </div>

      ))} */}
    </> )

  }

  return (
    <>
    <CartList className="shadow-2xl text-center items-center mx-auto"> 
    <h1 className="text-2xl font-bold text-gray-700">Cart items</h1>
    <CartUl>
      {/* { user.id ? <CartArea id={user.id} /> : <h1 className="text-2xl font-bold text-gray-700">No items in cart</h1> } */}
    <div className="total absolute left-0 bottom-0 flex justify-between py-3 px-4 w-full rounded shadow-2xl">
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-bold">Total</span>
        <span className="text-sm">$ 0.00</span>
      </div>
    </div>
    </CartUl>

    </CartList>
    </>
    
  )
}
