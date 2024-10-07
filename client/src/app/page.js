import Image from "next/image";
import styles from "./page.module.css";

import logo from "@/public/assets/fleket-logo.png"
import heroBanner from "@/public/assets/hero-banner.jpg"
import discount from "@/public/assets/discount-tag.svg"
import shopping from "@/public/assets/online-shopping.svg"
import Link from "next/link";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <Image src={logo} width={150} alt="fleket.com logo" />
        </div>
        <div>
          <Link href="/login">
            <span className={`${styles.btn} ${styles.transBtn}`}>Login</span>
          </Link>
          <Link href="/register">
            <span className={`${styles.btn} ${styles.bgBtn}`}>Register</span>
          </Link>
        </div>
      </header>

      {/* Hero Section! */}
      <div className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1>Launch Your <br/>Dream Store for <br/>Rs 0/-</h1>
          <p>Turn your ideas into income! Create a stunning online store for FREE - no tech skills needed, just your vision!</p>
          <Link href="/register">
            <span className={`${styles.btn} ${styles.bgBtn}`}>⚡ Get Started</span>
          </Link>
        </div>
        <div className={styles.hero_content}>
          <Image src={heroBanner} className={styles.bannerImg} alt="Hero Section Banner" />
        </div>
      </div>

      {/* Demo Video Section! */}
      <div className={styles.demo_section}>
        <h2>How to make a Free Store?</h2>
        <div>
          <iframe className={styles.video} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
      </div>

      {/* Why Us Section! */}
      <div className={styles.whyus_section}>
        <h2>Why Choose Us?</h2>
        <div className={styles.whyus_tag}>
          <div className={styles.content}>
            <Image src={discount} className={styles.whyus_img} alt="Discount Tag" />
          </div>
          <div className={styles.content}>
            <h3>No Costs, No Catch</h3>
            <p>Start your e-commerce journey without the burden of fees. Enjoy all the features you need to sell online without spending a cent.</p>
          </div>
        </div>
        <div className={`${styles.whyus_tag} ${styles.column}`}>
          <div className={styles.content}>
            <h3>Easy-to-Use Interface</h3>
            <p>Our intuitive website builder lets you design your store effortlessly. Customize your layout, add products, and launch in minutes!</p>
          </div>
          <div className={styles.content}>
            <Image src={shopping} className={styles.whyus_img} alt="online shopping" />
          </div>
        </div>
      </div>

      {/* Testimonial Section! */}
      <div className={styles.testi_section}>
        <h3>Success Stories</h3> 
        <div className={styles.testi_content}>
          <div className={styles.box}>
          "I launched my online store in just a few hours! The process was so simple, and I couldn't believe it was free. I've already made my first sale!"
          <br/><br/>-- Sarah T., Handmade Jewelry Seller
          </div>
          <div className={styles.box}>
          "I love how easy it is to manage my products and orders. [Your Website Name] made e-commerce accessible for me!"
          <br/><br/>-- Mike L., Vintage Clothing Shop Owner
          </div>
        </div>
      </div>

      {/* Testimonial Section! */}
      <div className={styles.final_section}>
        <h3>Get Started Today!</h3>
        <p>Don’t wait any longer to bring your business idea to life.<br/> Sign up for free and start building your online store now!</p>
        <Link href="/register">
            <span className={`${styles.btn} ${styles.bgBtn}`}>⚡ Get Started</span>
          </Link>
      </div>

      {/* Footer Section! */}
      <Footer />
      </div>
    </>
  );
}