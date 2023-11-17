// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartContextProvider } from "./Context/CartContext";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Cart";
import Index from "./Pages/Home";
import Sandbox from "./Pages/Sandbox";
// import ProtectedRoutes from './ProtectedRoutes';
 import { useAuth } from "./Context/useAuth";
const Router = () => {
 
  const { logout } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/"
            element={
                <Index />
            }
          />
          <Route
            path="/home"
            element={
                <Index />
            }
          />
          <Route
            path="/cart"
            element={
                <Cart />
            }
          />

          <Route path="/play" element={<Sandbox />} />
          <Route path="/logout" element={logout} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
