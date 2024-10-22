import Image from "next/image"
import styles from "./page.module.css"
import order_success from "@/public/assets/order-success.svg"

const SuccessPage = () => {
  return (
    <div className="dashboard_container">
      <div className={styles.success_container}>
        <Image src={order_success} alt="" width={200} height={"auto"} />
        <h1>Order Placed Successfully!</h1>
      </div>
    </div>
  )
}

export default SuccessPage