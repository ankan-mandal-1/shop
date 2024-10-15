"use client"
import React, { useContext } from 'react'
import {ShoppingCart} from '@gravity-ui/icons';
import { CartContext } from '@/hooks/CartHook';

const BuyNow = ({product}) => {

    const {cart, setCart} = useContext(CartContext)

  return (
    <button onClick={() => setCart([product])}><ShoppingCart/> Order Now - Cash on Delivery</button>
  )
}

export default BuyNow;