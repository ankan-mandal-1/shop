import { useContext, useState } from "react";
import "./CounterBtn.css"
import { CartContext } from "@/hooks/CartHook";

const CounterBtn = ({product}) => {

    // const [quantity, setQuantity] = useState(1)
    const {cart, setCart} = useContext(CartContext)

    // const increment = () => {
    //     setQuantity(prev => prev + 1)
    // }

    // const decrement = () => {
    //     if(quantity === 1){
    //         return;
    //     } else {
    //         setQuantity(prev => prev - 1)
    //     }
    // }

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
