import styled from "styled-components";
// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
import { useState } from "react";
import '../components/styles/login.css';
import logo from '../assets/favicon.ico'

const Login = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); 


    const closBtn = () => {
        setErrorMessage("")
      }
          
      const onLogin = async (e) => {
      e.preventDefault();
      
      if(email === "" || password === ""){
          setErrorMessage("please fill in all fields")
          return
        }
  
        
        const url = `http://localhost:9222/api/login`;
        await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({ 
            "email": email,
            "password": password
            })
        }).then(async (res)  => {
          console.log(res); 
          let isLogin = await res.json();   
          console.log(isLogin);
          if(isLogin.id > 0){
           navigate("/home");

          }      
          
          
        }).catch(error => {
          setSuccessMessage('')
          setErrorMessage("")
          setErrorMessage("login failed")
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setTimeout(() => {
            setSuccessMessage('')
            setErrorMessage("")
            setErrorMessage(errorMessage)
            
          }, 2000);
        })

        }

    const Wallpaper = styled.div`
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     `;




  const OnSignIn = styled.button `
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.23);
  width: 100p%
  `

  return (
    <>
     <div>
    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
    <div className="login-background">

    <div className=" login-section ">
      <div className="login-form-element">
        <div className="logo">
        <img src={logo} alt="brand" 
       />
        </div>
          { errorMessage && (
        <div className="error transition duration-700 ease-in-out">
                    <div className="message">
                      <strong>{errorMessage}</strong>
                      <div className="close cursor-pointer" onClick={closBtn}>
                      <span className="material-symbols-outlined">
                        close
                        </span>
                      </div>
                    </div>
                  </div>
          )
          
          }
           { successMessage && (
               <div className="success transition duration-700 ease-in-out">
                    <div className="message">
                      <strong>{successMessage}</strong>
                    
                          </div>
              </div>
          )}
        <div className="form-container">
        <form className="text-center items-center p-2  flex flex-col w-10/12  mx-auto">
         
                  <div className="z-0 w-full mb-2">
                  
                      <input
                        type="email"
                        name="admin_email"
                        id="admin_email"
                        className="h-7vh text-black outline-none w-10/12"
                        placeholder="enter email "
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                     
                    </div>
                    <div className="z-0 w-full mb-2">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="h-7vh bg-primary-700 outline-none w-10/12"
                        placeholder="password "
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                 

                    
                    </div>

          </form>
        <div className="w-full text-center items-center -mt-2 px-2">
                        <OnSignIn
                          className=" hover:bg-primary-700 bg-white text-primary-700
                                 hover:text-white text-xl font-semibold py-3 px-8 text-md rounded-3xl shadow-2xl w-full"
                          onClick={onLogin}
                        >
                          login
                        </OnSignIn>
                        </div>
                        <div className='mt-4 flex gap-4 justify-between py-2 px-0 item-center '>

<p className=" text-sm text-400 flex justify-between items-start gap-4 w-full mx-auto">
  Dont have an account?
  <Link to="/signup" className="text-md font-semibold text-customGreen-200">
      Sign up
  </Link>
</p>
</div>

        </div>
  

      </div>

                
          </div>
    {/* ------------------------------ grid col 1 ends here ------------------------------------------ */}




    <Wallpaper className="login-wallpaper "  style={{ backgroundImage: `url(${backgroundImage})` }}>

    </Wallpaper>
            
    </div>

    </div>
    </>
  )
}

export default Login