import Image from "next/image"
import "./EcomFooter.css"
import logo from "@/public/assets/fleket-logo.png"
import Link from "next/link"

const EcomFooter = () => {
  return (
    <footer className={"footer"}>
      <Link href="https://www.fleket.com">
      <div className={"logo_content"} style={{color: "gray", fontWeight: 400, fontSize: "16px"}}>
        Made with
        <Image src={logo} className={"logo"} alt="fleket logo" style={{width: "100px", height: "auto"}} />
        </div>
        </Link>
      </footer>
  )
}

export default EcomFooter