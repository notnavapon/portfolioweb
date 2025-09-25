import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        preview:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },{timestamps: true}
);

const Blog = mongoose.model("Blog", blogSchema);


export default Blog;