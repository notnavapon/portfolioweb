import { create } from "zustand";
import { axiosInstance } from "../config/axios";



export const useRoleStore = create((set)=>({
    role: "",

    getRole: async (email)=>{
        try{
            if(!email) return;
            const res = await axiosInstance.get("/role",{ params: { email: email } })
            set({role: res.data})
        }catch(error){
            console.error("Error in getRole:", error);
        }
    },

    

}))