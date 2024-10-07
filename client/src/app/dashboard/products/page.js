import styles from "./page.module.css"
import Image from 'next/image'
import threeDot from "@/public/assets/threeDot.png"
import bg from "@/public/assets/bg.jpg"

const page = () => {
  return (
    <div className="dashboard_container">
      <div className={styles.product_container}>
        <h1>All Products</h1>
        <div className={styles.product}>
          <div>
            <Image src={bg} alt={"Product"} className={styles.product_img}/>
          </div>
          <div>
            <div className={styles.title}>Fusion LED Buld with RGB light</div>
            <div className={styles.price}>₹430 <span className={styles.strike}>₹599</span></div>
          </div>
          <div>
            <Image src={threeDot} alt="edit"/>
          </div>
        </div>

        <div className={styles.product}>
          <div>
            <Image src={bg} alt={"Product"} className={styles.product_img}/>
          </div>
          <div>
            <div className={styles.title}>Fusion LED Buld with RGB light</div>
            <div className={styles.price}>₹430 <span className={styles.strike}>₹599</span></div>
          </div>
          <div>
            <Image src={threeDot} alt="edit"/>
          </div>
        </div>

        <div className={styles.product}>
          <div>
            <Image src={bg} alt={"Product"} className={styles.product_img}/>
          </div>
          <div>
            <div className={styles.title}>Fusion LED Buld with RGB light</div>
            <div className={styles.price}>₹430 <span className={styles.strike}>₹599</span></div>
          </div>
          <div>
            <Image src={threeDot} alt="edit"/>
          </div>
        </div>

        <div className={styles.product}>
          <div>
            <Image src={bg} alt={"Product"} className={styles.product_img}/>
          </div>
          <div>
            <div className={styles.title}>Fusion LED Buld with RGB light</div>
            <div className={styles.price}>₹430 <span className={styles.strike}>₹599</span></div>
          </div>
          <div>
            <Image src={threeDot} alt="edit"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default page