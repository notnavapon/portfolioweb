import express from "express";
import { login,logout,signup, updateProfile, checkAuth, getUserPic } from "../controllers/authController.js";
import { protectRoute, uploadCompressionRoute} from "../middleware/authMidleware.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


router.put("/update-profile", protectRoute ,uploadCompressionRoute.single("profile") ,updateProfile);


router.get("/check", protectRoute, checkAuth);
router.get("/getuserpic", getUserPic);
export default router;