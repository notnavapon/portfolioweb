// const express = require("express") cuz i add type module in package.json

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import roleRoutes from "./routes/roleRoute.js";
import blogRoutes from "./routes/blogRoute.js";

import {app,server} from "./config/socket.js";

dotenv.config();


const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
))


app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);
app.use("/api/role", roleRoutes)
app.use("/api/blog", blogRoutes)



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../Client/dist")));

    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "../Client", "dist", "index.html"));
    });
}


server.listen(PORT, ()=>{
    console.log("server is running on post " + PORT);
    connectDB();
})