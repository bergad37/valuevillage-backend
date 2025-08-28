import express from 'express';

import blogController from '../controllers/blogController';

const router = express.Router();

router.get('/', blogController.fetchAllBlogs);
router.post('/', blogController.addBlog);
router.put('/:id', blogController.patchBlog);
router.delete('/:id', blogController.removeBlog);

export default router;
