"use client"
import Image from 'next/image'
import styles from "./page.module.css"
import {Box, LayoutList, ArrowShapeUpFromLine} from '@gravity-ui/icons';
import bg from "@/public/assets/bg.jpg"
import AddNavbar from '@/app/components/AddNavbar';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import apiClient from '@/utils/apiClient';

const page = () => {

  const token = localStorage.getItem("token")
  
  const [images, setImages] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    category: "",
    original_price: "",
    discounted_price: "",
    description: "",
    // product_images: selectedFiles
  })
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState([])


  const handleImage = (e) => {
    const fileList = e.target.files
    const filesArray = Array.from(fileList).slice(0, 4)
    setImages(filesArray)
    setSelectedFiles(e.target.files);
  }

  console.log(selectedFiles)

  const getCategories = async () => {
    try {
      const response = await apiClient.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCategory(response.data.categories)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const handleChange = (e) => {
    setProduct(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("title", product.title)
    formData.append("category", product.category)
    formData.append("original_price", product.original_price)
    formData.append("discounted_price", product.discounted_price)
    formData.append("description", product.description)
    
    for (let i = 0; i < images.length; i++) {
      formData.append('product_images', selectedFiles[i]);
    }
    // formData.append("product_images", selectedFiles)

    try {
      const res = await apiClient.post("/product/add-product", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
      console.log(res)
      toast.success(res.data.message)
      alert(res.data.message)
      setLoading(false)
    } catch (error) {
      console.log("ERROR", error)
      toast.error(error.response.data?.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
    <Toaster />
    <div className="dashboard_container">

      <AddNavbar />

      <form onSubmit={handleSubmit}>
      <div className={styles.content}>
        <h1>Add Product</h1>
        <div>
          <label>Product Name</label>
          <input name="title" placeholder="Product Name" className={styles.input} value={product.title} onChange={handleChange}/>
        </div>
        <div>
          <label>Product Category</label>
          <select name="category" className={styles.input} value={product.category} onChange={handleChange}>
              <option value="" defaultValue disabled hidden>Choose here</option>
            {category?.map((item, index) => (
              <option value={item._id} key={item._id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Original Price</label>
          <input name="original_price" placeholder="Original Price" className={styles.input} value={product.original_price} onChange={handleChange}/>
        </div>
        <div>
          <label>Discounted Price</label>
          <input name="discounted_price" placeholder="Discounted Price" className={styles.input} value={product.discounted_price} onChange={handleChange}/>
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" placeholder="Description" className={styles.input} value={product.description} onChange={handleChange}/>
        </div>
        <div>
          <label>Product Image (4 images only)</label>
          <div className={styles.image_content}>
            {images.map((image, index) => (
              <img src={URL.createObjectURL(image)} key={index} className={styles.image} />
            ))}
            <label className={styles.upload}>
              <ArrowShapeUpFromLine />Upload
              <input type="file" name="" id="" hidden accept="image/png, image/gif, image/jpeg, image/jpg" multiple onChange={handleImage}/>
            </label>
          </div>
        </div>
        <button disabled={loading}>{loading ? "Loading..." : "Add Product"}</button>
      </div>
      </form>

    </div>
    </>
  )
}

export default page