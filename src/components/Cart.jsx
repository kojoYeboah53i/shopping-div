/* eslint-disable react/prop-types */
// import React from 'react'
import {  useEffect, useState } from "react";
import styled from "styled-components";
// import { CartContext } from "../Context/CartContext";
import axios from "axios";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  // const url = `${import.meta.env.VITE_REMOTE_API_URL}/getCartwithUserId/${id}`;

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






return (
  <>
    <CartContainer className="shadow-2xl">
      <span className="flex justify-between items-center w-full py-2 px-4">  
      <h1 className="text-green-800 text-2xl"> Cart Items </h1>
      <h1></h1>
      </span>
      <CartUl>

      </CartUl>

    </CartContainer>
  
  </>
)

}

