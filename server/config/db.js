import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_DB).then(() => {
            console.log("DB Connected!")
        })
    } catch (error) {
        console.log("Error in Connecting DB", error)
    }
}

export default connectDB;