// import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Cart';
import Index from './Pages/Home';
// import ProtectedRoutes from './ProtectedRoutes';

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/home" element={<Index/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    {/* <ProtectedRoutes>
        <Route path="/cart" element={<Cart/>}/>
    </ProtectedRoutes> */}


    </BrowserRouter>
    </>
  )
}

export default Router;