"use client"
import styles from "./page.module.css"
import DashBoardHeader from '../components/DashBoardHeader'
import store_logo from "@/public/assets/store_logo.svg"
import Image from "next/image"
import { useState } from "react"
import {ArrowShapeUpFromLine} from '@gravity-ui/icons';
import apiClient from "@/utils/apiClient"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import Loader from "../components/Loader"

const OnBoard = () => {

  const router = useRouter()

  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const token = localStorage.getItem("token")

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("storeName", name)
      formData.append("storeSlug", link)
      formData.append("image", image);

      const res = await apiClient.post("/auth/onboard", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.setItem("storeSlug", link)
      toast.success(res.data.message)
      localStorage.setItem("store", res.data.user)
      router.push("/dashboard")
      setLoading(false)
    } catch (error) {
      // alert(error.response.data.message)
      setError(true)
      toast.error(error.response.data.message)
      setLoading(false)
    }
  }

  return (
    <>
      <DashBoardHeader/>
      <form onSubmit={submitHandler}>
      <div className={styles.container}>
        <div style={{textAlign: "center"}}>
          <Image src={image ? URL.createObjectURL(image) : store_logo} className={styles.logo} width="100" height="100" alt="Logo"/><br/>
        </div>
        <div className={styles.input_fields}>
          <label className={styles.upload}>
            <input type="file" hidden onChange={handleImage}/>
            <ArrowShapeUpFromLine />Click here to Upload Logo
          </label><br/>
          <label>Store Name</label><br/>
          <input type="text" placeholder="Store Name" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
          <label>Store Link</label><br/>
          <input type="text" placeholder="Store Link" className={error ? styles.error : null} value={link} onChange={(e) => setLink(e.target.value)} required/><br/>
          <label>{`https://www.fleket.com/${link}`}</label><br/>
          <button disabled={loading}>{loading ? "Loading..." : "Submit" }</button>
        </div>
      </div>
      </form>
    </>
  )
}

export default OnBoard