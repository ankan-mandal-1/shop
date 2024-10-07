import express from "express";
import { login, onboard, register } from "../controllers/authController.js";
import upload from "../middlewares/multer.js";
import authenticate from "../middlewares/authenticate.js";
const router = express.Router()

const fileSizeLimitErrorHandler = (err, req, res, next) => {
    if (err) {
      res.status(413).json({message: "File size too large!"})
    } else {
      next()
    }
  }

router.post("/login", login)
router.post("/register", register)
router.post("/onboard", authenticate, upload.single("image"), fileSizeLimitErrorHandler, onboard)

export default router;