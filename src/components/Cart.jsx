// import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";


export const Cart = () => {

   const [things, setThings] = useState([])

   useEffect(() => {

      setThings([ {name: "orange", price: 10}])

   }, [things])

    const CartList = styled.div`

    width: 95%;
    height: 90vh;
    margin: 1rem;
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
    `;


  return (

    <>
    <CartList className="shadow-2xl text-center items-center mx-auto"> 

    <CartUl>

    { things.map((thing) => { 
      <li className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{thing.name}</span>
            <span className="text-sm">{thing.price}</span>
          </div>
        </div>
    
      </li>
   }) }

    </CartUl>

    </CartList>
    </>
    
  )
}
