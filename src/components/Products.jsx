// import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useAuth} from "../Context/useAuth";
const Products = () => {
  
  const[products,setProducts] = useState([])
  const [user, setUser] = useState({});
  const {auth, currentUser } = useAuth();

  useEffect(() => {
    if (auth) {
      setUser(currentUser);
    }
  }
  , [auth, currentUser]);



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

//function to add product to cart
const addToCart = async (id, user_id) => {
  // alert("attempting to add item to cart")
  alert(id)
  // if(!user_id){
    toast.danger('adding to cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      return;
  // }
  // let result = await axios.post(`${import.meta.env.VITE_REMOTE_API_URL}/add-to-cart`, {id})
  // const data = await result.json();
  // console.log(data)
  // if(result.status === 200){
  //   toast.success('successfully added to cart', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
}





  return (
    <>

<div className="cart overflow-hidden overflow-y-scroll">
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
        <div className="add-to-cart w-full cursor-pointer" onClick={() => addToCart(product.id, user.id)}>
          <button 
          className="cart-btn py-2 px-6 text-center items-center mx-auto shadow-2xl">
            <span className="text-white text-lg">buy</span>
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  ))}
  </div>


<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
  )

  
}



export default Products;