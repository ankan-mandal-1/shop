"use client"
import { CartContext } from '@/hooks/CartHook'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'

const AddToCartSingle = ({product}) => {
    
  const {cart, setCart} = useContext(CartContext)

//   const order = {
//     fname:
//     phone:
//     address:
//     products: [
//         {
//             productId: dsfsdf43534,
//             quantity: 3
//         },
//         {
//             productId: dsfsdf43534,
//             quantity: 3
//         }
//     ]
// }

  const addToCart = (product) => {
    const checkInCart = cart.find((item) => item._id === product._id)
        if(checkInCart){
          toast.success("Product added to Cart!")
        } else {
          // setCart(prev => ([{productId: product._id, quantity: 1}, ...prev]))
          setCart(prev => ([{...product, quantity: 1}, ...prev]))
          toast.success("Product added to Cart!")
        }
  }

  return (
    <button className={"add_to_cart"} onClick={() => addToCart(product)}>Add</button>
  )
}

export default AddToCartSingle