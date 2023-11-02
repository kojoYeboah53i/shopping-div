import { createContext, useEffect, useState } from "react"



export const AuthContext  = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([''])
  const [auth, setAuth] = useState([''])

  const login = (user) => {
    setCurrentUser(user)
  }




  const logout = () => {
    setCurrentUser(null)
  }

  const value = { 
    auth,
    setAuth,
    setCurrentUser,
    currentUser,
    login,  
    logout
  }

  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

 
