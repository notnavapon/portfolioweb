import User from "../models/userModel.js";
import { genarateToken } from "../config/utils.js";
import bcrypt from "bcryptjs";
import cloudinary from "../config/cloudinary.js";
import multer from "multer"
import streamifier from "streamifier";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    //hash password with bcrypt

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      // gen jwt token here
      genarateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.prefilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error ion signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body)
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    genarateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {

    console.log("Error in login controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "",{maxAge:0})
    res.status(200).json({message: "Logged out Successfully"})
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};


// export const updateProfile = async(req,res) =>{
//   try {
    
//     const {profilePic} = req.body;
//     const userId = req.user._id;

//     if(!profilePic){
//       res.status(400).json({message: "Profile pic is required"});
//     }

//     const uploadResponse = await cloudinary.uploader.upload(profilePic);
//     const updateUser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new: true})

//     res.status(200).json(updateUser);
    
//   } catch (error) {
//     res.status(500).json({message: "Internal Server Error"});
//   }

// };



export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    // เช็คว่ามีไฟล์ไหม
    if (!req.file) {
      return res.status(400).json({ message: "Profile pic is required" });
    }

    // โหลด user เดิม
    const user = await User.findById(userId);
    const oldUrl = user.profilePic;

    // แปลง URL เป็น public_id (สำหรับลบ)
    let oldPublicId = null;
    if (oldUrl) {
      const parts = oldUrl.split("/profiles/");
      if (parts[1]) {
        oldPublicId = "profiles/" + parts[1].replace(/\.[^/.]+$/, ""); // ลบ .jpg/.png
        console.log(oldPublicId)
      }
    }

    // Upload รูปใหม่
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "profiles" },
      async (error, result) => {
        if (error) return res.status(500).json({ message: "Cloudinary error" });

        // ลบรูปเก่า ถ้ามี
        if (oldPublicId) {
          cloudinary.uploader.destroy(oldPublicId, (err, resDestroy) => {
            if (err) console.log("Failed to delete old image:", err);
            else console.log("Old image deleted:", resDestroy);
          });
        }

        // อัปเดต user
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { profilePic: result.secure_url },
          { new: true }
        );

        res.status(200).json(updatedUser);
      }
    );

    // สร้าง stream จาก buffer ของ Multer
    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);

  } catch (err) {
    console.error("Error in updateProfilePic:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const checkAuth = (req,res) =>{
  try {
    res.status(200).json(req.user);
    
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({message: "internal Server Error"});
  }
}


export const getUserPic = async (req,res) =>{
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ message: "Email is required" });


    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "Email not found" });

    res.status(200).json(user.profilePic);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }

}