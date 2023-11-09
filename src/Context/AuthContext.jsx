import { createContext, useEffect, useState } from "react"

export const AuthContext  = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([''])
  const [auth, setAuth] = useState(false)
  

  const login = (user) => {
    setCurrentUser(user)
  }

  const logout = () => {  
    setCurrentUser(null)
  }
  useEffect(() => {
    if (auth) {
      setCurrentUser(currentUser);
    }
  } , [auth, currentUser]);

  const data = { 
    auth,
    setAuth,
    setCurrentUser,
    currentUser,
    login,  
    logout,
  }

  return (
    <>
      <AuthContext.Provider value={data}>
        {children} 
      </AuthContext.Provider>
    </>
  )
} 

 
