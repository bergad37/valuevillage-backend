import prisma from '../../prisma/prismaClient';

// Get all users
const getAllBlogs = async () => {
  return await prisma.blog.findMany();
};

// Create a new user
const createBlog = async (data: any) => {
  return await prisma.blog.create({ data });
};

// Get a user by ID
const getBlogById = async (id: any) => {
  return await prisma.blog.findUnique({ where: { id: id } });
};

// Update a user
const updateBlog = async (id: any, data: any) => {
  return await prisma.blog.update({ where: { id: id }, data });
};

// Delete a user
const deleteBlog = async (id: any) => {
  return await prisma.blog.delete({ where: { id: id } });
};

export default {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
