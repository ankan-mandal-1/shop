import express from "express";
import { placeOrder, getAllOrders, getSingleOrder, deleteOrder } from "../controllers/orderController.js";
import authenticate from "../middlewares/authenticate.js";
const router = express.Router()

router.post("/", placeOrder)
router.get("/all", authenticate, getAllOrders)
router.get("/:id", authenticate, getSingleOrder)
router.delete("/delete/:id", authenticate, deleteOrder)

export default router;