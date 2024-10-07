import "./EcomFooterBanner.css"
import delivery from "@/public/assets/delivery.png"
import cashondelivery from "@/public/assets/cash-on-delivery.png"
import help from "@/public/assets/help-desk.png"
import Image from "next/image"

const EcomFooterBanner = () => {
  return (
    <div className={"footer_banner"}>
        <div className={"banner_box"}>
            <div className={"banner_icon"}><Image src={delivery} className={"banner_img"}/></div>
            <p>Free <br/>Delivery</p>
        </div>

        <div className={"banner_box"}>
            <div className={"banner_icon"}><Image src={cashondelivery} className={"banner_img"}/></div>
            <p>Payment <br/>Options</p>
        </div>

        <div className={"banner_box"}>
            <div className={"banner_icon"}><Image src={help} className={"banner_img"}/></div>
            <p>Customer <br/>Support</p>
        </div>

      </div>
  )
}

export default EcomFooterBanner