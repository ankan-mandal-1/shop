import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true // Removes leading and trailing spaces
    },
    password: {
        type: String,
        required: true
    },
    storeName: {
        type: String,
        default: "Store Name",
        lowercase: true,
        trim: true
    },
    storeSlug: {
        type: String,
        lowercase: true,
        trim: true
    },
    storeLogo: {
        type: String,
        default: "https://res.cloudinary.com/dfflk6oiq/image/upload/v1728116932/shop/wwm87vri7rcae1ugg4hy.svg"
    }
}, {timestamps: true})

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;