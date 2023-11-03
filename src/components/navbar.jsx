// import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/favicon.ico';
import { useAuth } from '../Context/useAuth';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const { currentUser, auth, logout } = useAuth();
  const navigate = useNavigate();

  // console.log(currentUser)

  const onLogout = () => {
    logout()
    navigate("/login");
  }



  return (
   <>
   <div className="navbar w-full flex justify-between items-center mx-auto p-2">
    <div className="brand">
      <img src={logo} alt="brand" 
       />
    </div>
    <div className="nav-links  md:w-1/6 w-full  ">
      <ul className='flex justify-between items-center mx-auto p-2 '>
        <li className='nav-link text-white text-2xl'>Cart</li>
        {
          auth ? ( <>
            <li className='nav-link text-white text-2xl'> {currentUser.name}</li>
            <li className='nav-link cursor-pointer' onClick={onLogout }>
            <span  className="material-symbols-outlined text-white text-2xl">
            logout
            </span>
          </li>
              </>
          ) : (
           <Link to="/login"> 
            <li className="nav-link cursor-pointer">
            <span  className="material-symbols-outlined text-white text-2xl">
            login
            </span>
          </li>
           </Link> 
          )
        }

    
      </ul>
    </div>
   </div>
   </>
  )
}

export default Navbar;