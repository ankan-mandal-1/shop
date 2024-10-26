"use client"
import Image from "next/image";
import styles from "./page.module.css"
import product from "@/public/assets/product.png"
import { useEffect, useState } from "react";
import apiClient from "@/utils/apiClient";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SingleOrderPage = ({params}) => {

    const {orderId} = params;
    // const token = localStorage.getItem("token")
    const [token, setToken] = useState("")
    const router = useRouter()
    const [order, setOrder] = useState([])

    const fetchOrderDetail = async (token) => {
        const res = await apiClient.get(`/order/${orderId}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          setOrder(res.data)
          console.log(res.data)
    }

    const calculateTotal = () => {
        return order.products?.reduce((total, product) => {
          const discountedPrice = parseFloat(product.productId.discounted_price);
          const quantity = parseInt(product.quantity);
          return total + (discountedPrice * quantity);
        }, 0);
      };
    
      const totalPrice = calculateTotal();

      const deleteOrder = async () => {
        if (confirm("Your Order will be deleted permanently!") == true) {
          const res = await apiClient.delete(`/order/delete/${orderId}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          toast.success(res.data.message)
          router.push("/dashboard/orders")
        } else {
          console.log("none")
        }
      }

    useEffect(() => {
        const useToken = localStorage.getItem("token")
        setToken(useToken)
        fetchOrderDetail(useToken)
    }, [])

  return (
    <div className="dashboard_container">
        <div className={styles.order_container}>
            <div><b>Order ID</b> #{orderId}</div>
            <div className={styles.datetime}>{new Date(order.createdAt).toDateString()}, {order?.createdAt?.match(/\d\d:\d\d/)}</div>
            <div><button onClick={deleteOrder} className={styles.deleteBtn}>Delete Order</button></div><br/>
            <hr />
            <div className={styles.item_length}>{order?.products?.length} Items</div>

            {order.products?.map((item, index) => (
                <div className={styles.box} key={index}>
                <div className={styles.image_box}>
                    <img src={item.productId.product_images[0].secure_url} alt="" className={styles.image} />
                </div>
                <div className={styles.details}>
                    <div className={styles.product_name}>{item.productId?.title}</div>
                    <div className={styles.quantity}><span className={styles.quantity_numb}>{item.quantity}</span> x ₹ {item.productId.discounted_price}</div>
                </div>
                <div className={styles.item_total}>₹ {item.productId.discounted_price * item.quantity}</div>
            </div>
            ))}
            
            <div className={styles.total_box}>
                <div>Total</div>
                <div style={{color: "green"}}>₹ {totalPrice?.toFixed(2)}</div>
            </div>

            <div className={styles.customer_box}>
                <div className={styles.heading}>Customer Details</div>
                <div className={styles.label}>Name</div>
                <div className={styles.light_label}>{order?.fname}</div>
                <div className={styles.label}>Mobile</div>
                <div className={styles.light_label}>{order?.phone}</div>
                <div className={styles.label}>Email</div>
                <div className={styles.light_label}>{order?.email}</div>
                <div className={styles.label}>Shipping Address</div>
                <div className={styles.light_label}>
                    {order?.address},<br/>
                    {order?.locality},<br/>
                    {order?.landmark},<br/>
                    {order?.city},<br/>
                    {order?.state},<br/>
                    {order?.pin}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleOrderPage