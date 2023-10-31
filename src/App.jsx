
import './App.css';

// import styled from 'styled-components'
import  { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Products from './components/Products';

const App = () => {


  const[products,setProducts] = useState([])
  // const id =1;
    useEffect(()  => {
      fetch(`http://localhost:9222/shop/v1/products`)
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          console.log(data)
        })
    }, [ ])
  




  return (
    <>
    <Navbar/>
  <div className="container mt-4"></div>
   
   <Products items={products} />


    

        
    </>

  );

};



export default App;