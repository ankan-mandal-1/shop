import express from "express";
import authenticate from "../middlewares/authenticate.js";
import { addProduct, deleteProduct, editProduct, getAllProducts, getProductByOwner, getSingleProduct } from "../controllers/productController.js";
import multer from "multer";
const router = express.Router()
import path from "path"

// const fileSizeLimitErrorHandler = (err, req, res, next) => {
//     if (err) {
//       res.status(413).json({message: "Unsuppported file"})
//     } else {
//       next()
//     }
//   }

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, "./uploads");
//     },
//     filename: function (req, file, cb){
//         //cb(null, `${Date.now()}-${file.originalname}`);
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//     }
// })

// const upload = multer({
//     storage: storage, 
//     limits: { fileSize: 5 * 1000 * 1000 },
//     fileFilter: function (req, file, callback) {
//         var ext = path.extname(file.originalname);
//         if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//             return callback(new Error('Only images are allowed'))
//         }
//         callback(null, true)
//     },
// })

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Accept images only
  const mimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (mimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload an image file.'), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 2MB
  fileFilter,
});

router.get("/all", authenticate, getProductByOwner)
router.get("/single/:id", getSingleProduct)
router.put("/edit/:id", authenticate, editProduct)
router.delete("/delete/:id", authenticate, deleteProduct)
router.post("/add-product", authenticate, upload.array('product_images', 4), /*fileSizeLimitErrorHandler,*/ addProduct /*addProductTest*/)
router.get("/:storeSlug", getAllProducts)

export default router;