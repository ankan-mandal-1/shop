import { useContext, useState } from "react";
import "./CounterBtn.css"
import { CartContext } from "@/hooks/CartHook";

const CounterBtn = ({product}) => {

    const {cart, setCart} = useContext(CartContext)

    const updateQuantity = (id, newQuantity) => {
        setCart(prevProducts =>
            prevProducts.map(product => 
                product._id === id ? { ...product, quantity: newQuantity } : product
            )
        );
    };

  return (
    <div className="counter">
      <button onClick={() => product.quantity === 1 ? null : updateQuantity(product._id, product.quantity - 1)}>-</button>
        {product.quantity}
      <button onClick={() => updateQuantity(product._id, product.quantity + 1)}>+</button>
    </div>
  );
};

export default CounterBtn;
