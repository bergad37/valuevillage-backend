// src/controllers/userController.js
import { Request, Response } from 'express';
import blogService from '../services/blogService';

const fetchAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({
      data: blogs,
      success: true,
      mesage: 'Blogs list have been fetched successfully',
    });
  } catch (error: any) {
    res.status(500).json({ error: `Failed to fetch blogs ${error.message}` });
  }
};

const addBlog = async (req: Request, res: Response) => {
  try {
    const newBlog = await blogService.createBlog(req.body);
    res
      .status(201)
      .json({ data: newBlog, success: true, message: 'Blog saved fetched successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create blog' });
  }
};

const fetchBlogbyId = async (req: Request, res: Response) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (blog) {
      res.json({ data: blog, success: true });
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

const patchBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await blogService.updateBlog(req.params.id, req.body);
    res.json({ data: updatedBlog, success: true });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update blog' });
  }
};

const removeBlog = async (req: Request, res: Response) => {
  try {
    const blogDeleted = await blogService.deleteBlog(req.params.id);
    res.status(204).send({ success: blogDeleted });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete blog' });
  }
};

export default { fetchAllBlogs, addBlog, fetchBlogbyId, patchBlog, removeBlog };
