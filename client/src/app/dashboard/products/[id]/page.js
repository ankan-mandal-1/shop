"use client"
import React, {useEffect, useState} from 'react'
import styles from "../../add/page.module.css"
import {TrashBin} from '@gravity-ui/icons';
import toast, { Toaster } from 'react-hot-toast';
import apiClient from '@/utils/apiClient';
import { useParams, useRouter } from 'next/navigation';

const EditProduct = () => {

  const {id} = useParams()
  const router = useRouter()
  // const token = localStorage.getItem("token")
  const [token, setToken] = useState("")
  
  const [images, setImages] = useState([])
  const [product, setProduct] = useState({
    title: "",
    // category: "",
    original_price: "",
    discounted_price: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  // const [category, setCategory] = useState([])

  const handleChange = (e) => {
    setProduct(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const getProduct = async () => {
    try {
        const res = await apiClient.get(`/product/single/${id}`)
        console.log(res.data)
        setProduct({
            title: res.data.title,
            category: res.data.category,
            original_price: res.data.original_price,
            discounted_price: res.data.discounted_price,
            description: res.data.description,
        })
        setImages(res.data.product_images)
    } catch (error) {
        alert(error)
    }
  }

  // const getCategories = async () => {
  //   try {
  //     const response = await apiClient.get("/category", {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     setCategory(response.data.categories)
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await apiClient.put(`/product/edit/${id}`, product, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        toast.success(res.data.message)
        router.refresh();
    } catch (error) {
        alert(error)
    }
  }

  const deleteProduct = async () => {
    setLoading(true)
    try {
      if (confirm("Are you sure you want to delete this product? ") == true) {
        const res = await apiClient.delete(`/product/delete/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        console.log(res)
        alert(res.data.message)
        router.push("/dashboard/products")
        setLoading(false)
      } else {
        setLoading(false)
        return;
      }
    } catch (error) {
      alert(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    const useToken = localStorage.getItem("token")
    setToken(useToken)
    // getCategories()
    getProduct()
  }, [])

  return (
    <>
    <Toaster />
    <div className="dashboard_container">
                <form onSubmit={handleSubmit}>
                <div className={styles.content}>
                    <h1>Edit Product <span>
                      <TrashBin onClick={deleteProduct} style={{ width: '24px', height: '24px', color: "red" }}/>
                      </span></h1>
                    <div>
                    <label>Product Name</label>
                    <input name="title" placeholder="Product Name" className={styles.input} value={product.title} onChange={handleChange}/>
                    </div>
                    {/* <div>
                    <label>Product Category</label>
                    <select name="category" className={styles.input} value={product.category} onChange={handleChange}>
                        <option value="" defaultValue disabled hidden>Choose here</option>
                        {category?.map((item, index) => (
                        <option value={item._id} key={item._id}>{item.name}</option>
                        ))}
                    </select>
                    </div> */}
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
                        <img src={image.secure_url} key={index} className={styles.image} alt="image" />
                        ))}
                    </div>
                    </div>
                    <button disabled={loading}>{loading ? "Loading..." : "Edit Product"}</button>
                </div>
                </form>
                
        </div>
        </>
  )
}

export default EditProduct