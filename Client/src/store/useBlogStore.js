import { create } from "zustand";
import { axiosInstance } from "../config/axios";

export const useBlogStore = create((set) => ({
  blogs: [],
  blog: {},
  title: "",
  preview: "",
  content: "",
  blog_id: "",
  setTitle: (title) => set({ title }),
  setPreview: (preview) => set({ preview }),
  setContent: (content) => set({ content }),
  reset: () => set({ title: "", preview: "", content: "" }),

  getBlogs: async() =>{
    try {
      const res = await axiosInstance.get("/blog");
      set({blogs: res.data})
      // console.log("getblog: "+res.data)
    } catch (error) {
      console.error("Error in getBlog: ", error);
    }
  },
  createBlog: async(data) =>{
    try {
      console.log(data)
      const res = await axiosInstance.post("/blog", data);
    } catch (error) {
      console.error("Error in createBlog:", error);
    }
  },
  selectBlog: async(id) =>{
    try {
      const res = await axiosInstance.get("/blog/"+id);
      set({blog: res.data})
    } catch (error) {
      console.error("Error in selectBlog:", error);
    }
  },
  editBlog: async(id, data) =>{
    try {
      console.log(id,data)
      const res = await axiosInstance.put("/blog/edit/"+id, data);
    } catch (error) {
      console.error("Error in editBlog:", error);
    }
  },
  deleteBlog: async(id) =>{
    try {
      const res = await axiosInstance.delete("/blog/delete/"+id);
      getBlogs()
    } catch (error) {
      console.error("Error in deleteBlog:", error);
    }
  }


}));
