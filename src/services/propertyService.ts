import prisma from '../../prisma/prismaClient';

// Get all users
const getAllProperties = async () => {
  return await prisma.property.findMany();
};

// Create a new user
const createProperty = async (data: any) => {
  return await prisma.property.create({ data });
};

// Get a user by ID
const getPropertyById = async (id: any) => {
  return await prisma.property.findUnique({ where: { id: id } });
};

// Update a user
const updateProperty = async (id: any, data: any) => {
  return await prisma.user.update({ where: { id: id }, data });
};

// Delete a user
const deleteProperty = async (id: any) => {
  return await prisma.blog.delete({ where: { id: id } });
};

export default {
  getAllProperties,
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
};
