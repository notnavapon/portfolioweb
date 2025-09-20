import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import multer from "multer";

// ตั้งค่า Multer
const storage = multer.memoryStorage();
export const uploadCompressionRoute = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB


export const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;


        if(!token){
            return res.status(401).json({message: "Unauth - no token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "Unauth - Invalid Token "});
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({message: "User not found"});
        }

        req.user = user
        next()
        
    } catch (error) {
        console.log("Error in protectRoute midedleware", error.message)
        res.status(500).json({message: "Internal server error"})
    }
}
