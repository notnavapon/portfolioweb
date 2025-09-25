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
  reset: () => set({ title: "", content: "" }),

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
  }


}));
