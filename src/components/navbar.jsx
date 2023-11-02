// import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.ico'

const Navbar = () => {
  return (
   <>
   <div className="navbar w-full flex justify-between items-center mx-auto p-2">
    <div className="brand">
      <img src={logo} alt="brand" 
       />
    </div>
    <div className="nav-links">
      <ul className='flex justify-between items-center mx-auto p-2'>
        <li className='nav-link text-white text-2xl'>Cart</li>
        <li className='nav-link'>
          <Link to="/login">
          <span  className="material-symbols-outlined text-white text-2xl">
          logout
          </span>
          </Link>
        </li>
    
      </ul>
    </div>
   </div>
   </>
  )
}

export default Navbar;