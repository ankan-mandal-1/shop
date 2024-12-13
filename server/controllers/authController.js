import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/authModel.js";
import { v2 as cloudinary } from "cloudinary";

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All Fields are required!" });
  }
  try {
    const emailLowerCase = email.toLowerCase();
    //Check User
    const checkUser = await UserModel.findOne({ email: emailLowerCase });
    if (!checkUser) {
      return res
        .status(400)
        .json({ message: "User not found! Please Register" });
    }

    //Compare Password
    const comparePassword = await bcryptjs.compare(
      password,
      checkUser.password
    );
    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid Credientials!" });
    }
    const token = jwt.sign(
      {
        _id: checkUser._id,
        email: checkUser.email,
        storeName: checkUser.storeName,
        storeSlug: checkUser.storeSlug
      },
      process.env.JWT,
      { expiresIn: "180d" }
    );

    checkUser.password = "";

    return res
      .status(200)
      .json({ message: "Login Successfully", token, user: checkUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All Fields are required!" });
    }
    if(password.length < 6){
      return res.status(400).json({message: "Password should be atleast 6 characters!"})
    }
    //Check user register or not
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "User already Registered" });
    }

    //Hash Password
    const genSalt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, genSalt);

    //Create a new user
    const user = new UserModel({
      name,
      email,
      password: hashPassword,
    });
    const saveUser = await user.save();

    //Gen token
    const token = jwt.sign(
      {
        _id: saveUser._id,
        email: saveUser.email,
        storeName: saveUser.storeName,
        storeSlug: saveUser.storeSlug
      },
      process.env.JWT,
      { expiresIn: "180d" }
    );

    return res
      .status(200)
      .json({ message: "User Registered Successfully", user: saveUser, token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//------------------------------------------------
const dataUri = (file) => {
  const { mimetype, buffer } = file;
  // Convert the buffer to Base64
  const base64 = buffer.toString("base64");
  return `data:${mimetype};base64,${base64}`;
};
//------------------------------------------------

const onboard = async (req, res) => {
  const { storeName, storeSlug } = req.body;
  const storeLogo = req.file;

  const storeNameLower = storeName.toLowerCase()
  const storeSlugLower = storeSlug.trim().toLowerCase().replace(/\s+/g, '_');

  if (!storeName || !storeSlug) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const checkSlugAvailability = await UserModel.findOne({ storeSlug: storeSlugLower });

    if (checkSlugAvailability) {
      return res.status(400).json({ message: "Store Link not Available!" });
    }

    if (!req.file) {
      const store = await UserModel.updateOne(
        { email: req.user.email },
        { storeName: storeNameLower, storeSlug: storeSlugLower },
        { new: true }
      );
      return res.status(200).json({ message: "Store created successfully!" });
    }

    const base64DataUri = dataUri(storeLogo);

    const result = await cloudinary.uploader.upload(base64DataUri, {
      folder: "shop",
      transformation: [
        {
          quality: 30, // Adjust the quality as needed (0-100)
          fetch_format: "auto",
          width: 150,
        }
      ]
    });

    const store = await UserModel.updateOne(
      { email: req.user.email },
      { storeName, storeSlug, storeLogo: result.secure_url },
      { new: true }
    );
    return res.status(200).json({ message: "Store created successfully!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const onboardEdit = async (req, res) => {
  console.log("HIT")
  const storeLogo = req.file;

  if (!storeLogo) {
    return res.status(400).json({ message: "Logo is required!" });
  }

  try {

    const base64DataUri = dataUri(storeLogo);

    const result = await cloudinary.uploader.upload(base64DataUri, {
      folder: "shop",
      transformation: [
        {
          quality: 30, // Adjust the quality as needed (0-100)
          fetch_format: "auto",
          width: 150,
        }
      ]
    });

    const store = await UserModel.updateOne(
      { email: req.user.email },
      { storeLogo: result.secure_url },
      { new: true }
    );
    return res.status(200).json({ message: "Store logo added successfully!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const checkStoreCreated = async (req, res) => {
  try {
    if(!req.user.storeSlug) {
      return res.status(400).json({message: "No store created", storeAvailable: false})
    } else {
      return res.status(400).json({message: "No store created", storeAvailable: true})
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

const getStore = async (req, res) => {
  const {storeSlug} = req.params;
  const storeSlugLower = storeSlug.toLowerCase()

  try {
    const data = await UserModel.findOne({storeSlug: storeSlugLower}).select("-password")
    if(!data){
      return res.status(400).json({ message: "No store found" });
    }
    return res.status(200).json({
      storeName: data.storeName,
      storeLogo: data.storeLogo,
      storeSlug: data.storeSlug
    })
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}


export { login, register, onboard, checkStoreCreated, getStore, onboardEdit };
