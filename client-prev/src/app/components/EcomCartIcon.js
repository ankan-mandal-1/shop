"use client"
import Image from "next/image";
import React, { useContext } from "react";
import cartIcon from "@/public/assets/cart.png"
import { CartContext } from "@/hooks/CartHook";
import "./EcomCartIcon.css"

const EcomCartIcon = () => {

    const {cart, setCart} = useContext(CartContext)

  return (
    <div>
      <Image src={cartIcon} className={"cart_icon"} alt="cart-icon" />
      {cart.length > 0 && <span className="redDot"></span>}
    </div>
  );
};

export default EcomCartIcon;
