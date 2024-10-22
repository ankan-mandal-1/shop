"use client"
import Image from "next/image"
import styles from "./page.module.css"
import bg from "@/public/assets/bg.jpg"
import { useEffect, useState } from "react"
import apiClient from "@/utils/apiClient"
import Link from "next/link"

const OrderPage = () => {

  // const token = localStorage.getItem("token")
  const [token, setToken] = useState("")

  const [orders, setOrders] = useState([])

  const getAllOrders = async () => {
    try {
      const res = await apiClient.get("/order/all", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setOrders(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const useToken = localStorage.getItem("token")
    setToken(useToken)
    getAllOrders()
  }, [])

  return (
    <div className="dashboard_container">
      <div className={styles.order_container}>
        <h1>Orders</h1><br/>
        {orders.length < 1 && <div>No Orders Found!</div>}

        {/* {orders.map((order, index) => (
          <div className={styles.order_box}>
          <div>
            <Image src={bg} className={styles.product_image}/>
          </div>
          <div>
          <p><b>{order.fname}</b></p>
            <p>{new Date(order.createdAt).toDateString()}, {order.createdAt.match(/\d\d:\d\d/)}</p>
          </div>
        </div>
        ))} */}

        {orders.map((order, index) => (
          <Link href={`/dashboard/orders/${order._id}`} key={index}>
            <div className={styles.order_box}>
          <div>
            <img src={order.products[0].productId.product_images[0].secure_url} className={styles.product_image}/>
          </div>
          <div>
          <p style={{color: "#000"}}><b>{order.fname}</b></p>
            <p>{new Date(order.createdAt).toDateString()}, {order.createdAt.match(/\d\d:\d\d/)}</p>
          </div>
        </div>
          </Link>
        ))}
        
        

        {/* <div className={styles.order_box}>
          <div>
            <Image src={bg} className={styles.product_image}/>
          </div>
          <div>
            <p>Ankan Mandal</p>
            <p>12 July 2015, 11:15pm</p>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default OrderPage