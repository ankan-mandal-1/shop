import express from "express";
import authenticate from "../middlewares/authenticate.js";
import { addProduct, getAllProducts } from "../controllers/productController.js";
import multer from "multer";
const router = express.Router()
import path from "path"

const fileSizeLimitErrorHandler = (err, req, res, next) => {
    if (err) {
      res.status(413).json({message: "Unsuppported file"})
    } else {
      next()
    }
  }

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads");
    },
    filename: function (req, file, cb){
        //cb(null, `${Date.now()}-${file.originalname}`);
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage, 
    limits: { fileSize: 5 * 1000 * 1000 },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
})

router.get("/:storeSlug", getAllProducts)
router.post("/add-product", authenticate, upload.array('product_images', 4), fileSizeLimitErrorHandler, addProduct)

export default router;