/* eslint-disable react/prop-types */
// import React from 'react'
import {  useEffect, useState } from "react";
import styled from "styled-components";
// import { CartContext } from "../Context/CartContext";
// import axios from "axios";
import { useAuth } from "../Context/useAuth";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { auth } = useAuth();
  // const [customer, setCustomer] = useState({});

  //  console.log("user", user)



    const CartContainer = styled.div`

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


    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(user == null || user == undefined){
        return;
      }
      // setCustomer(user);
      const id = user.id;
      console.log("id", id)

      fetch(`${import.meta.env.VITE_REMOTE_API_URL}/getCartwithUserId/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setCartItems(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      return () => {
        console.log("cleaning up")
        setCartItems([])
      }

    },[]);


    // const listCartItems =(items) => {
  
    //   return <>
    //    { items.map((item) => (
    //     <li key={item.id} className="flex justify-between items-center py-3 px-4 w-full rounded shadow-2xl">
    //       <div className="flex justify-between items-center w-full">
    //         <span className="text-lg font-bold">{item.name}</span>
    //         <span className="text-sm">¢ {item.price}</span>
    //       </div>
    //       <div className="flex justify-between items-center w-full">
    //         <span className="text-lg font-bold">{item.image}</span>
    //         {/* <span className="text-sm">¢ {item.price * item.quantity}</span> */}
    //       </div>
    //     </li>
    //   ))
    //   </>
    //   )} 
      





return (
  <>
    <CartContainer className="shadow-2xl text-center mx-auto">
      <h1 className="font-bold text-gray-700 text-2xl"> Cart Items </h1>
      <CartUl>

         {/* conditional rendering here */}
        { auth ? 'cart items present'  : <h1 className="text-2xl font-bold text-gray-700">cart is empty</h1> }
        <div className="total absolute left-0 bottom-1 flex justify-between py-3 px-4 w-full rounded shadow-2xl">
          <div className="flex justify-between items-center w-full">
            <span className="text-lg font-bold">Total</span>
            <span className="text-sm">¢ 0.00</span>
          </div>
        </div>

      </CartUl>

    </CartContainer>
  
  </>
)

}

