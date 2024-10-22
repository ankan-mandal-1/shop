"use client"
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    // Calculate total price
  const totalPrice = cart.reduce((acc, product) => {
    const originalPrice = parseFloat(product.original_price); // Convert to number
    const quantity = product.quantity;
    return acc + (originalPrice * quantity);
}, 0);

const totalPriceDiscount = cart.reduce((acc, product) => {
  const discountedPrice = parseFloat(product.discounted_price); // Convert to number
  const quantity = product.quantity;
  return acc + (discountedPrice * quantity);
}, 0);

  return (
    <CartContext.Provider value={{cart, setCart, totalPrice, totalPriceDiscount}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;