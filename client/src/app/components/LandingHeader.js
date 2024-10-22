"use client"
import { useEffect, useState } from "react"
import "./LandingHeader.css"
import Link from 'next/link'

const LandingHeader = () => {

    // const token = localStorage.getItem("token");
    const [token, setToken] = useState("")

    useEffect(() => {
      const useToken = localStorage.getItem("token");
      setToken(useToken)
    }, [])

  return (
    <div>
        {token ? <Link href="/dashboard">
        <span className={`btn bgBtn`}>Dashboard</span>
        </Link> : <><Link href="/login">
        <span className={`btn transBtn`}>Login</span>
        </Link>
        <Link href="/register">
        <span className={`btn bgBtn`}>Register</span>
        </Link></>}
    </div>
  )
}

export default LandingHeader