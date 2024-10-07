import Image from 'next/image'
import styles from "./page.module.css"
import herobanner from "@/public/assets/hero-banner.jpg"
import ProductImage from '@/app/components/ProductImage'
import {ShoppingCart} from '@gravity-ui/icons';

const SingleProduct = () => {
  return (
    <div className={`dashboard_container ${styles.product_container}`}>
        <ProductImage />
        <div className={styles.product_info}>
            <div className={styles.product_seller}>BEST SELLER</div>
            <div className={styles.product_title}><h1>Magical Game Box with 400 in 1 Classic Old Games</h1></div>
            <div className={styles.product_price}>
                <span style={{textDecoration: "line-through", color: "#434343", fontWeight: 400}}>Rs 1,350</span>
                 Rs 784</div>
            <div className={styles.taxes}>*Inclusive of all taxes</div>
            <div className={styles.btn}>
              <button style={{ color: "#000", background: "#fff", border: "2px solid"}}>Add to Cart</button>
              <button><ShoppingCart/> Order Now - Cash on Delivery</button>
            </div>
            <div className={styles.description}>
              <h2>Description</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor cum aspernatur neque at deleniti, sunt possimus magni nesciunt perspiciatis corporis asperiores vero aut obcaecati quos sit vitae quia culpa.
            </div>
        </div>
    </div>
  )
}

export default SingleProduct