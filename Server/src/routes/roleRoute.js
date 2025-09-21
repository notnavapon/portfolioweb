import express from "express"
import { protectRoute } from "../middleware/authMidleware.js";
import { getRoleOfUser, setRoleOfUser, changeRoleOfUser } from "../controllers/roleController.js";


const router = express.Router();


router.get('/:id', protectRoute, getRoleOfUser)
router.post('/',protectRoute, setRoleOfUser)
router.put('/:id',protectRoute, changeRoleOfUser)


export default router;