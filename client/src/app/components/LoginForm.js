"use client";
import React, { useState } from "react";
import styles from "@/app/(auth)/page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import apiClient from "@/utils/apiClient";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const res = await apiClient.post("/auth/login", { email, password });
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.user.storeSlug);
      if (res.data.user.storeSlug === undefined) {
        router.push("/onboard");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className={styles.box}>
          <label>Email</label>
          <br />
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.box}>
          <label>Password</label>
          <br />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ color: "gray", marginTop: "10px" }}>
          Don't have an account?{" "}
          <Link href="/register" style={{ textDecoration: "underline" }}>
            Register
          </Link>
        </div>

        <div>
          <button>Login</button>
          <div
            style={{ color: "gray", marginTop: "10px", textAlign: "center" }}
          >
            <Link
              href="/forgot-password"
              style={{ textDecoration: "underline" }}
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
