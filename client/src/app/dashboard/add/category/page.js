"use client"
import Image from 'next/image'
import threeDot from "@/public/assets/threeDot.png"
import styles from "../page.module.css"
import {Box, LayoutList, ArrowShapeUpFromLine} from '@gravity-ui/icons';
import bg from "@/public/assets/bg.jpg"
import AddNavbar from '@/app/components/AddNavbar';
import toast, { Toaster } from 'react-hot-toast';
import apiClient from '@/utils/apiClient';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CategoryPage = () => {

  // const token = localStorage.getItem("token")

  const [categoryName, setCategoryName] = useState("")
  const [category, setCategory] = useState([])

  const [token, setToken] = useState("")

  const addCategory = async (e) => {
    e.preventDefault()
    try {
      const response = await apiClient.post("/category/add", {name: categoryName}, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setCategory(prev => [response.data.category, ...prev])
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const getCategories = async () => {
    try {
      const response = await apiClient.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setCategory(response.data.categories)
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  console.log(category)

  useEffect(() => {
    const userToken = localStorage.get("token")
    setToken(userToken)
    getCategories()
  }, [])

  return (
    <>
    <Toaster />
    <div className="dashboard_container">

      <AddNavbar />

      <form onSubmit={addCategory}>
      <div className={styles.content}>
        <h1>Add Category</h1>
        <div>
          <label>Category Name</label>
          <input name="name" placeholder="Category Name" className={styles.input} onChange={(e) => setCategoryName(e.target.value)}/>
        </div>
        <button>Add Catgory</button>
      </div>
      </form>
      {category.map((cat, index) => (
        <div className={styles.category_box} key={index}>
        <div className={styles.category_title}>{cat.name}</div>
        <Link href={`./${cat._id}`}>
          <div className={styles.category_edit}>
            <Image src={threeDot} alt="edit"/>
          </div>
        </Link>
      </div>
      ))}
    </div>
    </>
  )
}

export default CategoryPage