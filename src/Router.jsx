// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Cart";
import Index from "./Pages/Home";
// import ProtectedRoutes from './ProtectedRoutes';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/"
            element={
              <CartContextProvider>
                <Index />
              </CartContextProvider>
            }
          />
          <Route
            path="/home"
            element={
              <CartContextProvider>
                <Index />
              </CartContextProvider>
            }
          />
          <Route
            path="/cart"
            element={
              <CartContextProvider>
                <Cart />
              </CartContextProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
