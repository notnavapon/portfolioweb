import express from 'express'

import {getBlogs, createBlog, selectBlog, editBlog, deleteBlog} from '../controllers/blogController.js'
import { protectRoute } from "../middleware/authMidleware.js";



const router = express.Router();


router.get('', getBlogs);
router.post('/', protectRoute, createBlog);
router.get('/:id', selectBlog);
router.put('/edit/:id', protectRoute, editBlog);
router.delete('/delete/:id', protectRoute, deleteBlog);

export default router;