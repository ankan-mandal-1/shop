import logo from "@/public/assets/logo.webp"
import cart from "@/public/assets/cart.png"
import Image from 'next/image';
import styles from "./page.module.css"
import Product from "@/public/assets/product.png"
import square from "@/public/assets/square.webp"
import Link from "next/link";
import EcomProductList from "../components/EcomProductList";
// import { useParams } from "next/navigation";
import apiClient from "@/utils/apiClient";
import LoaderGray from "@/public/assets/loader-gray";
 
// export const metadata = {
//     title: "Ecommerce - Made with Fleket.com",
//     description: "Generated by create next app",
//   };

export async function generateMetadata({ params }){
  // read route params
  const storeId = params.storeId;

  // fetch data
  // const product = await fetch(`http://localhost:3001/products/${id}`);
  // const resMetadata = await product.json();
  
  const res = await apiClient.get(`/auth/${storeId}`)

  return {
    title: `${res.data.storeName} - Made with Fleket.com`,
    description: `Discover ${res.data.storeName}, your go-to eCommerce store for trendy gadgets, fashion, and home decor! Enjoy unbeatable prices, fast shipping, and exceptional customer service. Shop our curated collection and find the latest must-haves today!`,
  };
}

function StorePage({ params }) {
  const storeId = params.storeId;

  return (
    <div className={styles.container}>
      <div className={styles.h1}><h1>Best Sellers</h1></div>
      <div className={styles.product_container}>
        <EcomProductList storeId={storeId} />
      </div>
    </div>
  )
}
 
export default StorePage