import Image from "next/image"
import "./EcomHeader.css"
import logo from "@/public/assets/logo.webp"
import cart from "@/public/assets/cart.png"

const EcomHeader = () => {
  return (
    <header className={"header"}>
        <div className={"logo_content"}>
        <Image src={logo} className={"logo"} />
        Tmall
        </div>
        <div>
            <Image src={cart} className={"cart_icon"} />
        </div>
      </header>
  )
}

export default EcomHeader