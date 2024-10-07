"use client";
import React, { useState } from "react";
import styles from "../(auth)/page.module.css";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import apiClient from "@/utils/apiClient";

const RegisterForm = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password || !user.name) {
      toast.error("All Fields Required!");
      return;
    }
    if(user.password.length < 6){
      toast.error("Password should be atleast 6 characters!")
      return;
    }
    try {
      const res = await apiClient.post("/auth/register", user);
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      router.push("/onboard");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className={styles.box}>
          <label>Name</label>
          <br />
          <input
            type="text"
            className={styles.input}
            placeholder="Name"
            name="name"
            onChange={handleOnChange}
            value={user.name}
            required
          />
        </div>
        <div className={styles.box}>
          <label>Email</label>
          <br />
          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
            value={user.email}
            required
          />
        </div>
        <div className={styles.box}>
          <label>Password</label>
          <br />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
            value={user.password}
            required
          />
        </div>
        <div style={{ color: "gray", marginTop: "10px" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ textDecoration: "underline" }}>
            Login
          </Link>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
