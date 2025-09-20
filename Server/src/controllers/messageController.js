import User from "../models/userModel.js";
import Message from "../models/messageModel.js";
import cloudinary from "../config/cloudinary.js";

import {io, getReceiverSocketId} from "../config/socket.js";

export const getUsersForSidebar = async(req , res) =>{
    try{
        const loggendInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggendInUserId}}).select("-password");

        res.status(200).json(filteredUsers)
    }catch(error){
        console.error("Error in getUsersForSidebar:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params
        const myId = req.user._id

        const messages = await Message.find({
            $or:[
                {senderId: myId, receiverId:userToChatId},
                {senderId:userToChatId, receiverId:myId}
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        console.error("Error in getMessages:", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const sentMessage = async(req,res)=>{
    try {
        const {text , image} = req.body;
        const {id: receiverId}  = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
            console.log(uploadResponse)
        }

        const newMessage = new Message ({
            senderId, 
            receiverId, 
            text, 
            image: imageUrl,
        });

        await newMessage.save();

        //SOCKET
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMesage controller: " ,error.message);
        res.status(500).json({error: "Internal server error"});
    }
}