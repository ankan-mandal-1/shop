import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import sales from "@/public/assets/sales.png"
import orders from "@/public/assets/orders.png"
import link from "@/public/assets/link.png"

const DashboardPage = () => {

  const sale =1234

  return (
    <div className="dashboard_container">
      <div className={styles.dashboard}>
        <div className={styles.box}>
            <div className={styles.icon_title_image}>
              <Image src={sales} alt={"sales"} />
              <span>Sales</span>
            </div>
            <p className={styles.revenue}>$ 6,000</p>
            <p className={styles.day}>Today</p>
        </div>

        <div className={styles.box}>
            <div className={styles.icon_title_image}>
              <Image src={orders} alt={"order"} />
              <span>Orders</span>
            </div>
            <p className={styles.revenue}> {sale.toLocaleString()}</p>
            <p className={styles.day}>Today</p>
        </div>
        </div>

        <div className={styles.store_link}>
          <div className={styles.store_text}><Image src={link} />Store Link</div>
          <div className={styles.store_url}>https://www.fleket.com/tmall_store</div>
          <button>Copy Link</button>
        </div>
    </div>
  )
}

export default DashboardPage