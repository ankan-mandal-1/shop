"use client"
import Image from 'next/image'
import "./ProductImage.css"
import herobanner from "@/public/assets/hero-banner.jpg"
import fleketLogo from "@/public/assets/fleket-logo.png"
import { useState } from "react"

const ProductImage = ({singleProd}) => {

    const [image, setImage] = useState("")

  return (
    <div>
        <div className={"big_image_content"}>
            <img src={!image ? singleProd?.product_images[0].secure_url : image} alt={"product"} className={"big_image"}/>
        </div>
        <div className={"small_image_content"}>
            {singleProd?.product_images.map((image, index) => (
                <div key={index}>
                    <img 
                    src={image.secure_url} 
                    alt={"product"} 
                    className={"small_image"} 
                    onClick={() => setImage(image.secure_url)}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImage