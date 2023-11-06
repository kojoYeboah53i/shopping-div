// import React from 'react'

import { createContext, useState } from "react"

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({children}) => {

  const [things, setThings] = useState([
    { id: 1, name: "orange", price: 10},
    {id: 2, name: "mango", price: 14},
  ])

  const cartItemsList = {
    things,
    setThings,
  }

  return (
    <CartContext.Provider value={cartItemsList}>
      {children}
    </CartContext.Provider>
  )
}
