import Image from "next/image"
import styles from "./page.module.css"
import bg from "@/public/assets/bg.jpg"

const page = () => {
  return (
    <div className="dashboard_container">
      <div className={styles.order_container}>
        <h1>Orders</h1><br/>
        
        <div className={styles.order_box}>
          <div>
            <Image src={bg} className={styles.product_image}/>
          </div>
          <div>
          <p><b>Ankan Mandal</b></p>
            <p>12 July 2015, 11:15pm</p>
          </div>
        </div>

        <div className={styles.order_box}>
          <div>
            <Image src={bg} className={styles.product_image}/>
          </div>
          <div>
            <p>Ankan Mandal</p>
            <p>12 July 2015, 11:15pm</p>
          </div>
        </div>

        <div className={styles.order_box}>
          <div>
            <Image src={bg} className={styles.product_image}/>
          </div>
          <div>
            <p>Ankan Mandal</p>
            <p>12 July 2015, 11:15pm</p>
          </div>
        </div>

        <div className={styles.order_box}>
          <div>
            <Image src={bg} className={styles.product_image}/>
          </div>
          <div>
            <p><b>Ankan Mandal</b></p>
            <p>12 July 2015, 11:15pm</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page