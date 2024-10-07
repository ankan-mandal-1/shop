import Image from "next/image"
import "./EcomFooter.css"
import logo from "@/public/assets/logo.webp"

const EcomFooter = () => {
  return (
    <footer className={"footer"}>
      <div className={"logo_content"}>
        <Image src={logo} className={"logo"} />
        Tmall
        </div>
      </footer>
  )
}

export default EcomFooter