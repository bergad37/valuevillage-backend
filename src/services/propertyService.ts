import prisma from '../../prisma/prismaClient';

// Get all properties
const getAllProperties = async () => {
  return await prisma.property.findMany();
};

// Create a new property
const createProperty = async (data: any) => {
  return await prisma.property.create({ data });
};

// Get a property by ID
const getPropertyById = async (id: any) => {
  return await prisma.property.findUnique({ where: { id: id } });
};

// Update a property
const updateProperty = async (id: any, data: any) => {
  return await prisma.property.update({ where: { id: id }, data });
};

// Delete a property
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
