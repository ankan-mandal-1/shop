import CategoryModel from "../models/categoryModel.js"

const getAllCategory = async (req, res) => {
    console.log(req.user._id)
    try {
        const allCategory = await CategoryModel.find({owner: req.user._id});
        if(!allCategory){
            return res.status(200).json({message: "Category Empty"})
        }
        return res.status(200).json({message: "All Category", categories: allCategory})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const createCategory = async (req, res) => {
    const {name} = req.body;

    if(!req.user.storeSlug){
        return res.status(400).json({message: "Please create a store!"})
    }

    if(!name) {
        return res.status(400).json({message: "Category name required!"})
    }
    try {
        const addCategory = new CategoryModel({
            name,
            owner: req.user._id
        })
        const saveCategory = await addCategory.save()
        return res.status(200).json({message: "Category created successfully!", category: saveCategory})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const editCategory = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
        const checkUser = await CategoryModel.findById(id)
        if(!checkUser){
            return res.status(200).json({message: "No Category Found!"})
        }
        if(checkUser.owner.toString() !== req.user._id.toString()){
            return res.status(400).json({message: "Unauthorized User!"})
        }
        const updateCategory = await CategoryModel.findByIdAndUpdate(id, {name}, {new: true});
        return res.status(200).json({message: "Category updated successfully!", category: updateCategory})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    try {
        const checkUser = await CategoryModel.findById(id)
        if(checkUser.owner.toString() !== req.user._id.toString()){
            return res.status(400).json({message: "Unauthorized User!"})
        }
        const deleteCategory = await CategoryModel.findByIdAndDelete(id)
        console.log(deleteCategory)
        return res.status(200).json({message: "Category Deleted Successfully!"})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {getAllCategory, createCategory, editCategory, deleteCategory}