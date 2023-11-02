import { createContext, useState } from "react"



export const AuthContext  = createContext();

export const AuthProvider = ( {children} ) => {
 
    const [currentUser, setCurrentUser] = useState([''])

    const login = (user) => {
        setCurrentUser(user)
    }

    const auth = () => {
    if(currentUser.id > 0){
    return true;
    } return false;
  }

 const value= {
    auth,
    login
  }
 
    return (
   <>
   <AuthContext.Provider value={value}>
        { children }
   </AuthContext.Provider>
   </>
  )
}
