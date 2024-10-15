"use client"
import Image from "next/image"
import styles from "./page.module.css"
import product_image from "@/public/assets/product.png"
import { useContext } from "react"
import { CartContext } from "@/hooks/CartHook"
import CounterBtn from "@/app/components/CounterBtn"

const CartPage = () => {

  const {cart, setCart} = useContext(CartContext)
  
  const removeProduct = (productId) => {
    const filterProduct = cart.filter((item) => item._id !== productId)
    setCart(filterProduct)
  }

  return (
    <div className="dashboard_container">
      <div className={styles.header}>Shopping Bag</div>
      <div className={styles.cart_container}>
        <div className={styles.no_items}>{cart.length} ITEMS</div>
        
        {cart.map((item, index) => (
          <div className={styles.outer_box} key={index}>
          <div className={styles.product_box}>
            <div className={styles.image_box}>
              <Image src={item.product_images[0].secure_url} className={styles.product_img} width={100} height={100} alt="" />
            </div>
            <div className={styles.detail_box}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.price}>₹{item.discounted_price} <span className={styles.strike_price}>₹{item.original_price}</span></div>
              <CounterBtn product={item}/>
            </div>
          </div>
          <div className={styles.removeBtn}>
            <button onClick={() => removeProduct(item._id)}>REMOVE</button>
          </div>
        </div>
        ))}

        <div className={styles.outer_box}>
          <div className={styles.total}>
            <div className={styles.fee}>Item total</div>
            <div className={styles.fee} style={{fontWeight: "bold"}}>
              <span style={{color: "gray", textDecoration: "line-through", paddingRight: "10px"}}>₹1,847</span>
               ₹1,847
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.fee}>Delivery fee</div>
            <div className={styles.fee}  style={{color: "green"}}>FREE</div>
          </div>
          <hr/>
          <div className={styles.total}>
            <div className={styles.fee} style={{fontWeight: "bold"}}>Grand Total</div>
            <div className={styles.fee}  style={{fontWeight: "bold"}}>₹1,847</div>
          </div>
        </div>
        <div className={styles.buyBtn}>
        <button>BUY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage