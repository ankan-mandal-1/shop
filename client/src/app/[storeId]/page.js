import logo from "@/public/assets/logo.webp"
import cart from "@/public/assets/cart.png"
import Image from 'next/image';
import styles from "./page.module.css"
import Product from "@/public/assets/product.png"
import square from "@/public/assets/square.webp"
import Link from "next/link";
 
export const metadata = {
    title: "Tmall Ecommerce",
    description: "Generated by create next app",
  };

function StorePage() {

  return (
    <div className={styles.container}>

      <div className={styles.h1}><h1>Best Sellers</h1></div>
      <div className={styles.product_container}>
        
        <Link href="/store/product">
        <div className={styles.product}>
            <div className={styles.img_bottom}>
                <Image src={Product} className={styles.product_img}/>
            </div>
            <p className={styles.title}>Title Goes here</p>
            <p className={styles.strike_price}>Rs {"1986"}</p>
            <div className={styles.original_price}>
                <p>Rs 589</p>
                <button className={styles.add_to_cart}>Add</button>
            </div>
        </div>
        </Link>

        <div className={styles.product}>
            <div className={styles.img_bottom}>
                <Image src={"https://images.unsplash.com/photo-1727549133759-dd5b1a105ed9"} className={styles.product_img} width="100" height="100"/>
            </div>
            <p className={styles.title}>Title Goes here</p>
            <p className={styles.strike_price}>Rs {"1986"}</p>
            <div className={styles.original_price}>
                <p>Rs 589</p>
                <button className={styles.add_to_cart}>Add</button>
            </div>
        </div>

        <div className={styles.product}>
            <div className={styles.img_bottom}>
                <Image src={square} className={styles.product_img} width="100" height="100"/>
            </div>
            <p className={styles.title}>Title Goes here</p>
            <p className={styles.strike_price}>Rs {"1986"}</p>
            <div className={styles.original_price}>
                <p>Rs 589</p>
                <button className={styles.add_to_cart}>Add</button>
            </div>
        </div>

      </div>
      
    </div>
  )
}
 
export default StorePage