import { useContext } from "react"
import "./PriceContainer.css"
import { CartContext } from "@/hooks/CartHook"

const PriceContainer = () => {

    const {cart, setCart, totalPrice, totalPriceDiscount} = useContext(CartContext)

  return (
    <div className={"outer_box"}>
          <div className={"total"}>
            <div className={"fee"}>Item total</div>
            <div className={"fee"} style={{fontWeight: "bold"}}>
              <span style={{color: "gray", textDecoration: "line-through", paddingRight: "10px"}}>₹{totalPrice.toLocaleString()}</span>
               ₹{totalPriceDiscount.toLocaleString()}
            </div>
          </div>
          <div className={"total"}>
            <div className={"fee"}>Delivery fee</div>
            <div className={"fee"}  style={{color: "green"}}>FREE</div>
          </div>
          <hr/>
          <div className={"total"}>
            <div className={"fee"} style={{fontWeight: "bold"}}>Grand Total</div>
            <div className={"fee"}  style={{fontWeight: "bold"}}>₹{totalPriceDiscount.toLocaleString()}</div>
          </div>
        </div>
  )
}

export default PriceContainer