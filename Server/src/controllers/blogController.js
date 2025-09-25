import Blog from '../models/blogModel.js';
import User from '../models/userModel.js';


export const getBlogs = async (req , res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const createBlog = async (req , res) => {
    try{
        const newBlog  = new Blog({email: req.body.email , title: req.body.title , preview: req.body.preview ,content: req.body.content })
        await newBlog.save()
        res.status(200).json({message: `Create Blog success` + newBlog})
    }catch(error){
        res.status(400).json({message: error.message})
    }
};

export const editBlog = async (req , res) => {
    try{
        const editBlog  = await Blog.findByIdAndUpdate(req.params.id, req.body , {new: true})
        if(!editBlog) return res.status(404).json({message : "Not data in table"})
        res.status(200).json({message: `Edut Blog success` + editBlog})
    }catch(error){
        res.status(400).json({message: error.message})
    }
};


export const selectBlog = async (req , res) => {
    try{
        const selectBlog  = await Blog.findById(req.params.id)
        if(!selectBlog) return res.status(400).json({message: "Cant find id Blog in data"})
        res.status(200).json(selectBlog)
    }catch(error){
        res.status(400).json({message: error.message})
    }
};


export const deleteBlog = async (req , res) => {
    try{
        const selectBlog  = await Blog.findByIdAndDelete(req.params.id)
        if(!selectBlog) return res.status(400).json({message: "Cant find id Blog in data"})
        res.status(200).json({message:"delete blog id: "+id+" successfully"})
    }catch(error){
        res.status(400).json({message: error.message})
    }
};



