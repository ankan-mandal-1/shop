import Image from "next/image"
import logo from "@/public/assets/fleket-logo.png"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={"footer"}>
        <div>
          <Image src={logo} alt="fleket logo" width={150}/>
          <p>Launch your Dream store for Free!<br/>Copyright © 2024 - All rights reserved</p>
        </div>
        <div>
          <p>Legal</p><br/>
          <Link href="/about-us">About Us</Link><br/>
          <Link href="/terms-conditions">Terms & Conditions</Link><br/>
          <Link href="/privacy-policy">Privacy Policy</Link><br/>
          <Link href="/disclaimers">Disclaimers</Link>
        </div>
      </footer>
  )
}

export default Footer