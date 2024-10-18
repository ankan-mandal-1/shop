import UserModel from "../models/authModel.js";
import orderModel from "../models/orderModel.js";

const placeOrder = async (req, res) => {
    const {fname, phone, email, address, locality, landmark, pin, city, state, storeSlug, products} = req.body;

    const fnameTrim = fname.trim()
    const phoneTrim = phone.trim()
    const emailTrim = email?.trim()
    const addressTrim = address.trim()
    const localityTrim = locality?.trim()
    const landmarkTrim = landmark?.trim()
    const pinTrim = pin.trim()
    const cityTrim = city.trim()
    const stateTrim = state.trim()
    const storeSlugTrim = storeSlug.trim().toLowerCase().replace(/\s+/g, '_');

    try {
        if(products.length === 0){
            return res.status(400).json({message: "No product added!"})
        }
        if(!fnameTrim || !phoneTrim || !addressTrim || !pinTrim || !cityTrim || !stateTrim || !storeSlugTrim){
            return res.status(400).json({message: error.message})
        }
        const checkStore = await UserModel.findOne({storeSlug: storeSlugTrim})
        if(!checkStore){
            return res.status(404).json({message: "Store not found!"})
        }
        const createOrder = new orderModel({
            fname: fnameTrim,
            phone: phoneTrim,
            email: emailTrim,
            address: addressTrim,
            locality: localityTrim,
            landmark: landmarkTrim,
            pin: pinTrim,
            city: cityTrim,
            state: stateTrim,
            storeSlug: storeSlugTrim,
            products: products
        })
        const saveOrder = await createOrder.save()
        return res.status(200).json({message: "Order Placed Successfully!", saveOrder})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getAllOrders = async (req, res) => {
    const storeSlug = req.user.storeSlug
    try {
        const getOrders = await orderModel.find({storeSlug}).populate("products.productId", 'product_images').sort({ createdAt: -1 }).limit(50).select('-address -city -email -landmark -locality -phone -pin -state -updatedAt -storeSlug');
        if(!getOrders) {
            return res.status(400).json({message: "No Order Found!"})
        }
        return res.status(200).json(getOrders)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getSingleOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const order = await orderModel.findById(id).populate("products.productId");
        if(!order){
            return res.status(400).json({message: "No order found!"})
        }
        return res.status(200).json(order)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {placeOrder, getAllOrders, getSingleOrder}