// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useState } from "react";

const Navbar = () => {
  const {setCurrentUser, currentUser, auth, setAuth, logout,  } = useAuth();

  const navigate = useNavigate();

  // console.log(currentUser)
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken && localToken.length > 0) {
      setAuth(true);
    let user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
    } else {
      setAuth(false);
    }
  }
  , [setCurrentUser, setAuth]);

  const onLogout = () => {
    logout();
    navigate("/login");
  };



 

  return (
    <>
      <div className="navbar w-full flex justify-between items-center mx-auto p-2">
        <div className="brand">
          <img src={logo} alt="brand" />
        </div>
        <div className="nav-links  md:w-1/6 w-full  ">
          <ul className="flex justify-between items-center mx-auto p-2 ">
            <li className="nav-link text-white text-2xl">Cart</li>
            {auth ? (
              <>
                <li className="nav-link text-white text-2xl">
                  {" "}
                  {currentUser.name}
                </li>
                <li className="nav-link cursor-pointer" onClick={onLogout}>
                  <span className="material-symbols-outlined text-white text-2xl">
                    logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="nav-link cursor-pointer">
                    <span className="material-symbols-outlined text-white text-2xl">
                      login
                    </span>
                  </li>
                </Link>
          
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
