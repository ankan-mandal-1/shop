// "use client"
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import apiClient from "@/utils/apiClient";
import "./EcomProductList.css"
import Link from "next/link";
import AddToCartSingle from "./AddToCartSingle";

const EcomProductList = async ({storeId}) => {

  // const {storeId} = useParams()
  // const [products, setProducts] = useState([])


  // const fetchProducts = async () => {
  //   try {
  //     const res = await apiClient.get(`/product/${storeId}`);
  //     setProducts(res.data)
  //     console.log(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

    const response = await fetch(`http://localhost:8000/api/product/${storeId}`, { next: { revalidate: 300 } });
    if (!response.ok) {
      alert("Something went wrong!")
    }
    const products = await response.json();
  

  return (
    <>
    {products.map((product, index) => (
        <div className={"product"} key={index}>
          <Link href={`/${storeId}/${product._id}`}>
            <div className={"img_bottom"}>
                <img src={product.product_images[0].secure_url} className={"product_img"} alt={product.title} />
            </div>
            <p className={"title"}>{product.title.slice(0, 50)}...</p>
            <p className={"strike_price"}>Rs {product.original_price.toLocaleString()}</p>
            </Link>
            <div className={"original_price"}>
                <p>Rs {product.discounted_price.toLocaleString()}</p>
                <AddToCartSingle product={product}/>
            </div>
        </div>
      ))}
      </>
  )
}

export default EcomProductList