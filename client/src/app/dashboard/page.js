"use client"
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import sales from "@/public/assets/sales.png"
import orders from "@/public/assets/orders.png"
import link from "@/public/assets/link.png"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const DashboardPage = () => {

  const router = useRouter()
  // const token = localStorage.getItem("token")
  // const store = localStorage.getItem("storeSlug")
  const [token, setToken] = useState("")
  const [store, setStore] = useState("")

  const sale = 0

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(`https://www.fleket.com/${store}`);
      toast.success("URL Copied!")
    } catch (error) {
      toast.error("Something went wrong!")
    }
  }

  useEffect(() => {
    const useToken = localStorage.getItem("token")
    setToken(useToken)

    const useStore = localStorage.getItem("storeSlug")
    
    setStore(useStore)

    if(!useToken){
      router.push("/login")
      return;
    }
  
    if(useStore === "undefined" || useStore === null){
      router.push("/onboard")
      return;
    }
  }, [])


  return (
    <div className="dashboard_container">
      <div className={styles.dashboard}>
        <div className={styles.box}>
            <div className={styles.icon_title_image}>
              <Image src={sales} alt="sales" />
              <span>Sales</span>
            </div> 
            <p className={styles.revenue}>$ {sale.toLocaleString()}</p>
            <p className={styles.day}>Today</p>
        </div>

        <div className={styles.box}>
            <div className={styles.icon_title_image}>
              <Image src={orders} alt="order" />
              <span>Orders</span>
            </div>
            <p className={styles.revenue}> {sale.toLocaleString()}</p>
            <p className={styles.day}>Today</p>
        </div>
        </div>

        <div className={styles.store_link}>
          <div className={styles.store_text}><Image src={link} alt="store link"/>Store Link</div>
          <div className={styles.store_url}>https://www.fleket.com/{store}</div>
          <button onClick={copyText}>Copy Link</button>
        </div>
    </div>
  )
}

export default DashboardPage