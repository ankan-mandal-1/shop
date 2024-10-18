import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    locality: {
        type: String,
    },
    landmark: {
        type: String,
    },
    pin: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    storeSlug: {
        type: String,
        required: true
    },
    // products: {
    //     type: Array
    // }
    products: [{
        productId:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: String,
            required: true
        }
    }]
}, {timestamps: true})

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;