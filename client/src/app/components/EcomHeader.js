import Image from "next/image"
import "./EcomHeader.css"
import logo from "@/public/assets/logo.webp"
import Link from "next/link"
import EcomCartIcon from "./EcomCartIcon"
import url from "@/utils/url"

const EcomHeader = async ({storeId}) => {

  const product = await fetch(`https://fleket.vercel.app/api/auth/${storeId}`);
  // const product = await fetch(`${url}/${storeId}`);
  const response = await product.json();

  return (
    <header className={"header"}>
        <div className={"logo_content"}>
        <Link href={`/${storeId}`}><Image src={response?.storeLogo} className={"logo"} alt="logo" width={60} height={60} /></Link>
        <span style={{textTransform: "capitalize"}}>{response?.storeName}</span>
        </div>
        <Link href={`/${storeId}/cart`}>
          <EcomCartIcon />
        </Link>
      </header>
  )
}

export default EcomHeader