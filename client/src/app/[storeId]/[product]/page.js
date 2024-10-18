// "use client"
import AddToCart from "@/app/components/AddToCart";
import styles from "./page.module.css"
import ProductImage from '@/app/components/ProductImage'
import BuyNow from "@/app/components/BuyNow";
// import { useParams } from 'next/navigation';
// import apiClient from '@/utils/apiClient'
// import { useEffect, useState } from 'react'
// import LoaderGray from '@/public/assets/loader-gray'

export async function generateMetadata({ params }){
  // read route params
  const productId = params.product;
  
  const product = await fetch(`http://localhost:8000/api/product/single/${productId}`, { next: { revalidate: 300 } });
  const singleProd = await product.json();

  return {
    title: `${singleProd.title.slice(0, 60)}`,
    description: `${singleProd.description.slice(0, 68)}`,
  };
}

const SingleProduct = async ({params}) => {

  const productId = params.product;
  const storeId = params.storeId;

  // const {product} = useParams()
  // const [singleProd, setSingleProd] = useState()
  // const [loading, setLoading] = useState(false)
  
  // const getProduct = async () => {
  //   setLoading(true)
  //   try {
  //     const res = await apiClient.get(`/product/single/${product}`)
  //     console.log(res.data)
  //     setSingleProd(res.data)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   getProduct()
  // }, [])

  const product = await fetch(`http://localhost:8000/api/product/single/${productId}`, { next: { revalidate: 300 } });
  const singleProd = await product.json();


  // if(loading){
  //   return <div style={{textAlign: "center", display: "flex", justifyContent: "center", margin: "100px 0"}}>
  //     <LoaderGray />
  //   </div>
  // }

  return (
    <div className={`dashboard_container ${styles.product_container}`}>
        <ProductImage singleProd={singleProd} />

        <div className={styles.product_info}>
            <div className={styles.product_seller}>BEST SELLER</div>
            <div className={styles.product_title}><h1>{singleProd?.title}</h1></div>
            <div className={styles.product_price}>
                <span style={{textDecoration: "line-through", color: "#434343", fontWeight: 400}}>Rs {singleProd?.original_price.toLocaleString()}</span>
                 Rs {singleProd?.discounted_price.toLocaleString()}</div>
            <div className={styles.taxes}>*Inclusive of all taxes</div>
            <div className={styles.btn}>
              <AddToCart product={singleProd} />
              <BuyNow storeId={storeId} product={singleProd} />
            </div>
            <div className={styles.description}>
              <h2>Description</h2><br/>
              <span style={{whiteSpace: "pre-line"}}>{singleProd?.description}</span>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct