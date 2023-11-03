import { createContext, useState } from "react"


export const AuthContext  = createContext();


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ pages }) => {
  const [currentUser, setCurrentUser] = useState([''])
  const [auth, setAuth] = useState(false)

  const login = (user) => {
    setCurrentUser(user)
  }



  const logout = () => {
    setCurrentUser(null)
  }

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
        {pages}
      </AuthContext.Provider>
    </>
  )
}

 
