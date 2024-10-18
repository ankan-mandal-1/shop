import 'dotenv/config'
import cors from "cors"
import express from "express"
const app = express();

import authRoute from "./routes/authRoute.js"
import productRoute from "./routes/productRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import orderRoute from "./routes/orderRoute.js"

import connectDB from './config/db.js';
import { v2 as cloudinary } from 'cloudinary' 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

connectDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({message: "Fleket.com"})
})

app.use("/api/auth", authRoute)
app.use("/api/category", categoryRoute)
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})