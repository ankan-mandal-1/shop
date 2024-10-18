"use client"
import Image from "next/image"
import styles from "./page.module.css"
import product_image from "@/public/assets/product.png"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/hooks/CartHook"
import CounterBtn from "@/app/components/CounterBtn"
import { useParams, useRouter } from "next/navigation"
import PriceContainer from "@/app/components/PriceContainer"

const CartPage = () => {

  const {cart, setCart, totalPrice, totalPriceDiscount} = useContext(CartContext)

  const router = useRouter();
  const {storeId} = useParams()
  
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

        {cart.length === 0 ? null : <>
          <PriceContainer />
        <div className={styles.buyBtn}>
        <button onClick={() => router.push(`/${storeId}/address`)}>BUY NOW</button>
        </div>
        </>}

      </div>
    </div>
  )
}

export default CartPage