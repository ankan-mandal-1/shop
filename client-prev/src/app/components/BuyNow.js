"use client"
import React, { useContext } from 'react'
import {ShoppingCart} from '@gravity-ui/icons';
import { CartContext } from '@/hooks/CartHook';
import { useRouter } from 'next/navigation';

const BuyNow = ({product, storeId}) => {

    const router = useRouter()
    const {cart, setCart} = useContext(CartContext)

  return (
    <button onClick={() => {
      setCart([{...product, quantity: 1}])
      router.push(`/${storeId}/address`)
    }}><ShoppingCart/> Order Now - Cash on Delivery</button>
  )
}

export default BuyNow;