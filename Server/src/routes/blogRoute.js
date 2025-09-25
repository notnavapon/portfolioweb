import express from 'express'

import {getBlogs, createBlog, selectBlog} from '../controllers/blogController.js'
import { protectRoute } from "../middleware/authMidleware.js";



const router = express.Router();


router.get('', getBlogs);
router.post('/', protectRoute, createBlog);
router.get('/:id', selectBlog);

export default router;