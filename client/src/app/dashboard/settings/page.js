"use client"
import styles from "@/app/onboard/page.module.css"
import store_logo from "@/public/assets/store_logo.svg"
import download from "@/public/assets/download.webp"
import Image from "next/image"
import { useEffect, useState } from "react"
import {ArrowShapeUpFromLine} from '@gravity-ui/icons';
import apiClient from "@/utils/apiClient"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import stylesCustom from "./page.module.css"

const Settings = () => {

  const router = useRouter()

  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  const [existImage, setExistImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // const token = localStorage.getItem("token")
  const [token, setToken] = useState("")

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await apiClient.post("/auth/onboard-edit", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      toast.success(res.data.message)
      setLoading(false)
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
      setError(true)
      toast.error(error.response.data.message)
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("storeSlug");
    localStorage.removeItem("storeName");
    router.push("/")
  }

  useEffect(() => {
    const useToken = localStorage.getItem("token")
    setToken(useToken)

    const useStore = localStorage.getItem("storeSlug")

    const getLogo = async () => {
      try {
        const res = await apiClient.get(`/auth/${useStore.toLowerCase()}`);
        setExistImage(res.data.storeLogo)
      } catch (error) {
        alert("Something went wrong!")
        console.log(error)
      }
    }
    getLogo();
  }, [])

  return (
    <div className="dashboard_container">
      <form onSubmit={submitHandler}>
      <div className={styles.container}>
        <div style={{textAlign: "center"}}>
        <Image src={image ? URL.createObjectURL(image) : existImage || "https://res.cloudinary.com/dfflk6oiq/image/upload/v1728116932/shop/wwm87vri7rcae1ugg4hy.svg"} className={styles.logo} width="100" height="100" alt="Logo"/><br/>
        </div>
        <div className={styles.input_fields}>
          <label className={styles.upload}>
            <input type="file" hidden onChange={handleImage}/>
            <ArrowShapeUpFromLine />Click here to Upload Logo
          </label><br/>
          <button disabled={loading}>{loading ? "Loading..." : "Add Logo" }</button>
        </div>
      </div>
      </form>
        <Image src={download} width={200} className={stylesCustom.downloadBtn}/>
      <button onClick={logout} className={stylesCustom.logout}>Log Out</button>
    </div>
  )
}

export default Settings;