import Image from 'next/image'
import logo from "@/public/assets/fleket-logo.png"
import "./DashBoardHeader.css"

const DashBoardHeader = () => {
  return (
    <div className='dashboard_header'>
        <Image src={logo} width={140} height={35} alt="Fleket Logo" />
    </div>
  )
}

export default DashBoardHeader