"use client"
import styles from "./page.module.css"
import Image from 'next/image'
import threeDot from "@/public/assets/threeDot.png"
import store_logo from "@/public/assets/store_logo.svg"
import apiClient from "@/utils/apiClient"
import { useEffect, useState } from "react"
import Link from "next/link"

const page = () => {

  const token = localStorage.getItem("token")

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await apiClient.get("/product/all", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setProducts(res.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="dashboard_container">
      <div className={styles.product_container}>
        <h1>All Products</h1>
        {products.length === 0 && <p style={{color: "gray", marginTop: "10px"}}>No Product Added! Start by adding a Product</p>}
        {products.map((product, index) => (
          <Link href={`./products/${product._id}`}>
          <div className={styles.product} key={index}>
          <div>
            <Image src={product.product_images[0]?.secure_url ? product.product_images[0]?.secure_url : store_logo} alt={"Product"} className={styles.product_img} width={90} height={90}/>
          </div>
          <div>
            <div className={styles.title}>{product.title.slice(0, 58)}...</div>
            <div className={styles.price}>₹{product.discounted_price} <span className={styles.strike}>₹{product.original_price}</span></div>
          </div>
          <div>
            <Image src={threeDot} alt="edit"/>
          </div>
        </div>
        </Link>
        ))}
        
      </div>
    </div>
  )
}

export default page