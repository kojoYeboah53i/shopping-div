// import React from 'react'

import { useEffect, useState } from "react";

const Products = () => {

  const[products,setProducts] = useState([])

// console.log(items)
const url = `${import.meta.env.VITE_REMOTE_API_URL}`;

useEffect(() => {
  (async function() {

    let result = await fetch(`${url}/products`)
    // console.log(result)
     const data = await result.json();
    console.log(data)
    setProducts(data)
    
  })();// simulate loading for 1 second

  return () => {
    console.log("cleaning up")
  }
}, [url])



  return (
    <>
      {/* <div className=" products-c "> */}

<div className="cart">
  {products.map((product) => (
    <div className="cart-items" key={product.id}>
      <div className="cart-item shadow-2xl">
        <div className="cart-item-image">
          <img src={product.image} alt="item"   />
        </div>
        <div className="cart-item-details">
          <p className="cart-item-name">{product.name}</p>
          <p className="cart-item-price">${product.price}</p>
        </div>
        <div className="add-to-cart w-full">
          <button className="cart-btn py-2 px-6 flex justify-center items-center mx-auto">
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  ))}
  </div>
    
{/* </div> */}
    </>
  )

  
}



export default Products;