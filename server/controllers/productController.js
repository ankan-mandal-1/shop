import { v2 as cloudinary } from 'cloudinary' 
import { unlink } from 'node:fs';
import ProductModel from '../models/productModel.js';

const getAllProducts = async (req, res) => {
    const {storeSlug} = req.params;
    try {
        const getProducts = await ProductModel.find({storeSlug})
        return res.status(200).json(getProducts)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getProductByOwner = async (req, res) => {
    try {
        const getProducts = await ProductModel.find({owner: req.user._id}).sort({ createdAt: -1 })
        return res.status(200).json(getProducts)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getSingleProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findById(id);
        if(!product){
            return res.status(400).json({message: "Product Not Found!"})
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//Test Multer Memory Storage
// const addProductTest = async (req, res) => {
//     try {
//         const dataUri = (file) => {
//             const { mimetype, buffer } = file;
//             const base64 = buffer.toString("base64");
//             return `data:${mimetype};base64,${base64}`;
//         };

//         let productArray = [];

//         // Use Promise.all to wait for all image uploads to complete
//         const imageUploads = req.files.map(async (image) => {
//             const base64DataUri = dataUri(image);

//             const result = await cloudinary.uploader.upload(base64DataUri, {
//                 folder: "shop",
//                 transformation: [
//                     {
//                         quality: 30, // Adjust the quality as needed (0-100)
//                         fetch_format: "auto",
//                         width: 150,
//                     }
//                 ]
//             });

//             return {
//                 secure_url: result.secure_url,
//                 public_id: result.public_id
//             };
//         });

//         // Await all uploads to finish
//         productArray = await Promise.all(imageUploads);

//         return res.status(200).json(productArray);
//     } catch (error) {
//         console.error('Error uploading images:', error);
//         return res.status(500).json({ message: 'Image upload failed', error: error.message });
//     }
// };

const addProduct = async (req, res) => {

    if(!req.user.storeSlug){
        return res.status(400).json({message: "Please create a store!"})
    }

    const {title, original_price, discounted_price, description} = req.body;
    const product_images = req.files;

    if(!title || !discounted_price){
        return res.status(400).json({message: "Title & Discounted Price fields are required!"})
    }


    try {
        if(!product_images){
            const addProduct = new ProductModel({
                title, 
                // category, 
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

        const dataUri = (file) => {
            const { mimetype, buffer } = file;
            const base64 = buffer.toString("base64");
            return `data:${mimetype};base64,${base64}`;
        };

        let productArray = [];

        // Use Promise.all to wait for all image uploads to complete
        const imageUploads = req.files.map(async (image) => {
            const base64DataUri = dataUri(image);

            const result = await cloudinary.uploader.upload(base64DataUri, {
                folder: "shop",
                transformation: [
                    {
                        quality: 30, // Adjust the quality as needed (0-100)
                        fetch_format: "auto",
                        width: 500,
                    }
                ]
            });

            return {
                secure_url: result.secure_url,
                public_id: result.public_id
            };
        });

        // Await all uploads to finish
        productArray = await Promise.all(imageUploads);

        // -------
    
          const addProduct = new ProductModel({
            title, 
            original_price, 
            discounted_price, 
            description,
            product_images: productArray,
            owner: req.user._id,
            storeSlug: req.user.storeSlug
        })
        const saveProduct = await addProduct.save()

        return res.status(200).json({message: "Product created successfully!", product: saveProduct})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// Original Code
// const addProduct = async (req, res) => {

//     if(!req.user.storeSlug){
//         return res.status(400).json({message: "Please create a store!"})
//     }

//     const {title, original_price, discounted_price, description} = req.body;
//     const product_images = req.files;

//     if(!title || !discounted_price){
//         return res.status(400).json({message: "Title & Discounted Price fields are required!"})
//     }

//     // if(!category){
//     //     return res.status(400).json({message: "Please create a category!"})
//     // }

//     try {
//         if(!product_images){
//             const addProduct = new ProductModel({
//                 title, 
//                 // category, 
//                 original_price, 
//                 discounted_price, 
//                 description,
//                 owner: req.user._id,
//                 storeSlug: req.user.storeSlug
//             })
//             const saveProduct = await addProduct.save()
//             return res.status(200).json({message: "Product created successfully!", product: saveProduct})
//         }

//         // ------------------------------------
    
//         let images = [];
//         product_images.map(image => images.push(`./uploads/` + image.filename))
//         console.log(images)
//         let upload_images = []
//         for (const image of images) {

//             //Upload to Cloudinary one by one
//             const result = await cloudinary.uploader.upload(image, {
//                 transformation: [
//                   {
//                     quality: 30, // Adjust the quality as needed (0-100)
//                     fetch_format: "auto",
//                     width: 500,
//                   }
//                 ]
//               });
//             upload_images.push({public_id: result.public_id, secure_url: result.secure_url})
    
//           }
//           console.log(upload_images)
//           const addProduct = new ProductModel({
//             title, 
//             // category, 
//             original_price, 
//             discounted_price, 
//             description,
//             product_images: upload_images,
//             owner: req.user._id,
//             storeSlug: req.user.storeSlug
//         })
//         const saveProduct = await addProduct.save()

//         images.forEach(async (image) => (
//             //Delete Files from ./upload folder
//             unlink(image, (err) => {
//                 if (err) {
//                   console.error(err);
//                 } else {
//                   console.log('File is deleted.');
//                 }
//               })
//         ))

//         return res.status(200).json({message: "Product created successfully!", product: saveProduct})
//     } catch (error) {
//         return res.status(400).json({message: error.message})
//     }
// }

const editProduct = async (req, res) => {
    const {id} = req.params;
    const {title, category, original_price, discounted_price, description} = req.body
    try {
        const checkUser = await ProductModel.findById(id);
        if(checkUser.owner.toString() !== req.user._id.toString()){
            return res.status(400).json({message: "Unauthorized to Update!"})
        }
        const product = await ProductModel.findByIdAndUpdate(id, {
            title, 
            category, 
            original_price, 
            discounted_price, 
            description,
        }, {new: true})
        return res.status(200).json({message: "Updated Successfully!", product})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    let imageList = [];
    try {
        const checkUser = await ProductModel.findById(id);
        if(checkUser.owner.toString() !== req.user._id.toString()){
            return res.status(400).json({message: "Unauthorized to Delete!"})
        }

        const remove = await ProductModel.findByIdAndDelete(id);
        if(!remove) {
            return res.status(200).json({message: "Product not found"})
        }

        checkUser.product_images?.forEach(item => imageList.push(item.public_id))
        const result = await cloudinary.api.delete_resources(imageList);
        
        return res.status(200).json({message: "Product Deleted Successfully!"})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {getAllProducts, addProduct, getProductByOwner, getSingleProduct, editProduct, deleteProduct}