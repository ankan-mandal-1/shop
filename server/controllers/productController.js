import { v2 as cloudinary } from 'cloudinary' 
import { unlink } from 'node:fs';
import ProductModel from '../models/productModel.js';

const getAllProducts = async (req, res) => {
    const {storeSlug} = req.params;
    try {
        const getProducts = await ProductModel.find({storeSlug})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const addProduct = async (req, res) => {

    if(!req.user.storeSlug){
        return res.status(400).json({message: "Please create a store!"})
    }

    const {title, category, original_price, discounted_price, description} = req.body;
    const product_images = req.files;

    if(!title || !discounted_price){
        return res.status(200).json({message: "Title & Description fields are required!"})
    }

    try {
        if(!product_images){
            const addProduct = new ProductModel({
                title, 
                category, 
                original_price, 
                discounted_price, 
                description,
                owner: req.user._id,
                storeSlug: req.user.storeSlug
            })
            const saveProduct = await addProduct.save()
            return res.status(200).json({message: "Product created successfully!", product: saveProduct})
        }

        // ------------------------------------
    
        let images = [];
        product_images.map(image => images.push(`./uploads/` + image.filename))
        console.log(images)
        let upload_images = []
        for (const image of images) {
    
            //Upload to Cloudinary one by one
            const result = await cloudinary.uploader.upload(image);
            upload_images.push({public_id: result.public_id, secure_url: result.secure_url})
    
          }
          console.log(upload_images)
          const addProduct = new ProductModel({
            title, 
            category, 
            original_price, 
            discounted_price, 
            description,
            product_images: upload_images,
            owner: req.user._id,
            storeSlug: req.user.storeSlug
        })
        const saveProduct = await addProduct.save()

        images.forEach(async (image) => (
            //Delete Files from ./upload folder
            await unlink(image, (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log('File is deleted.');
                }
              })
        ))

        return res.status(200).json({message: "Product created successfully!", product: saveProduct})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {getAllProducts, addProduct}