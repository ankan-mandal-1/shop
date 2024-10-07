"use client"
import Image from 'next/image'
import "./ProductImage.css"
import herobanner from "@/public/assets/hero-banner.jpg"
import fleketLogo from "@/public/assets/fleket-logo.png"
import { useState } from "react"

const ProductImage = () => {

    const [image, setImage] = useState(herobanner) 

  return (
    <div>
        <div className={"big_image_content"}>
            <Image src={image} alt={"product"} className={"big_image"}/>
        </div>
        <div className={"small_image_content"}>
            <div>
                <Image src={fleketLogo} alt={"product"} className={"small_image"} onClick={() => setImage(fleketLogo)}/>
            </div>
            <div>
                <Image src={herobanner} alt={"product"} className={"small_image"} onClick={() => setImage("e1")}/>
            </div>
            <div>
                <Image src={herobanner} alt={"product"} className={"small_image"} onClick={() => setImage("e2")}/>
            </div>
            <div>
                <Image src={herobanner} alt={"product"} className={"small_image"} onClick={() => setImage("e3")}/>
            </div>
        </div>
    </div>
  )
}

export default ProductImage