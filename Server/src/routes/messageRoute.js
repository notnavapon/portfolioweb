import express from "express"
import { protectRoute } from "../middleware/authMidleware.js";
import { getUsersForSidebar, getMessages, sentMessage } from "../controllers/messageController.js";

const router = express.Router();

router.get("/users" ,protectRoute, getUsersForSidebar)
router.get("/:id", protectRoute, getMessages)


router.post("/send/:id", protectRoute, sentMessage)

export default router;