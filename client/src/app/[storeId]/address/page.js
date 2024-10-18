"use client"
import { useContext, useState } from "react"
import styles from "./page.module.css"
import { CartContext } from "@/hooks/CartHook"
import toast from "react-hot-toast"
import PriceContainer from "@/app/components/PriceContainer"
import apiClient from "@/utils/apiClient"
import { useRouter } from "next/navigation"

const AddressPage = ({params}) => {

    const {storeId} = params;
    const router = useRouter()
    
    const {cart, setCart} = useContext(CartContext)
    const [details, setDetails] = useState({
        fname: "",
        phone: "",
        email: "",
        address: "",
        locality: "",
        landmark: "",
        pin: "",
        city: "",
        state: ""
    })

    const changeHandler = (e) => {
        setDetails(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if(cart.length === 0){
            toast.error("Cart is Empty")
            return;
        }

        const productList = []
        cart.map(item => (productList.push({productId: item._id, quantity: item.quantity})))

        try {
            // const res = await apiClient.post("/order", {...details, storeSlug: storeId, products: cart})
            // toast.success(res.data.message)
            // router.push(`/${storeId}/success`)

            const res = await apiClient.post("/order", {...details, storeSlug: storeId, products: productList})
            toast.success(res.data.message)
            router.push(`/${storeId}/success`)
            console.log({...details, products: productList})
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className="dashboard_container">
        <PriceContainer />
        <form onSubmit={submitHandler}>
        <div className={styles.address_container}>
            <h2>Information</h2>
            <label>Full Name*</label>
            <input type="text" placeholder="Full Name" required name={"fname"} value={details.fname} onChange={changeHandler}/>
            <label>Mobile Number*</label>
            <input type="number" placeholder="Mobile Number" required name={"phone"} value={details.phone} onChange={changeHandler}/>
            <label>Email (Optional)</label>
            <input type="email" placeholder="Email (Optional)" name={"email"} value={details.email} onChange={changeHandler}/>
            <label>Full Address*</label>
            <input type="text" placeholder="Full Address" required name={"address"} value={details.address} onChange={changeHandler}/>
            <label>Locality / Area (Optional)</label>
            <input type="text" placeholder="Locality/Area (Optional)" name={"locality"} value={details.locality} onChange={changeHandler}/>
            <label>Landmark (Optional)</label>
            <input type="text" placeholder="Landmark" name={"landmark"} value={details.landmark} onChange={changeHandler}/>
            <label>Pin Code*</label>
            <input type="number" placeholder="Pin Code" required name={"pin"} value={details.pin} onChange={changeHandler}/>
            <label>City*</label>
            <input type="text" placeholder="City" required name={"city"} value={details.city} onChange={changeHandler}/>
            <label>State*</label>
            <input type="text" placeholder="State" required name={"state"} value={details.state} onChange={changeHandler}/>
            <button>BUY NOW - Cash on Delivery</button>
        </div>
        </form>
    </div>
  )
}

export default AddressPage