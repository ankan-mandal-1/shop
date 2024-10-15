"use client"
import { CartContext } from '@/hooks/CartHook'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'

const AddToCartSingle = ({product}) => {
    
  const {cart, setCart} = useContext(CartContext)

  const addToCart = (product) => {
    const checkInCart = cart.find((item) => item._id === product._id)
        if(checkInCart){
          toast.success("Product added to Cart!")
        } else {
          setCart(prev => ([{...product, quantity: 1}, ...prev]))
          toast.success("Product added to Cart!")
        }
  }

  return (
    <button className={"add_to_cart"} onClick={() => addToCart(product)}>Add</button>
  )
}

export default AddToCartSingle