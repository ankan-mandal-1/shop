"use client"
import { CartContext } from '@/hooks/CartHook'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'

const AddToCart = ({product}) => {

    const {cart, setCart} = useContext(CartContext)

    const addToCart = (product) => {
        const checkInCart = cart.find((item) => item._id === product._id)
            if(checkInCart){
              toast.success("Product added to Cart!")
            } else {
              setCart(prev => ([{...product, quantity: 1}, ...prev]))
            }
      }

  return (
    <button 
    style={{ color: "#000", background: "#fff", border: "2px solid"}}
    onClick={() => addToCart(product)}
    >Add to Cart</button>
  )
}

export default AddToCart