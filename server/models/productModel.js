import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    original_price: {
        type: String
    },
    discounted_price: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    product_images: [{
        secure_url: {
            type: String
        },
        public_id: {
            type: String
        }
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    storeSlug: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const ProductModel = mongoose.model("Product", ProductSchema)

export default ProductModel;