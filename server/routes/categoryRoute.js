import express from "express";
import authenticate from "../middlewares/authenticate.js";
import { getAllCategory, createCategory, editCategory, deleteCategory } from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", authenticate, getAllCategory)
// router.get("/categories-by-slug", authenticate, getCategoryBySlug)
router.post("/add", authenticate, createCategory)
router.put("/edit/:id", authenticate, editCategory)
router.delete("/delete/:id", authenticate, deleteCategory)

export default router;