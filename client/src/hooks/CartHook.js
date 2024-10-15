"use client"
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([])

    console.log(cart)

  return (
    <CartContext.Provider value={{cart, setCart}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;