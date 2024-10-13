import jwt from "jsonwebtoken";
import UserModel from "../models/authModel.js";

const authenticate = async (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const token = authorization.split(" ")[1]
        if(!token){
            return res.status(400).json({message: "Unauthorized!"})
        }
        const verified = jwt.verify(token, process.env.JWT)

        const getUser = await UserModel.findById(verified._id).select("-password") 
        req.user = getUser;
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({message: "Unauthorized!"})
    }
}

export default authenticate;  