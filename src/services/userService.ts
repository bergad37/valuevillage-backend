// src/services/userService.js

import prisma from '../../prisma/prismaClient';

// Get all users
const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Create a new user
const createUser = async (data: any) => {
  return await prisma.user.create({ data });
};

// Get a user by ID
const getUserById = async (id: any) => {
  return await prisma.user.findUnique({ where: { id: id } });
};

// Update a user
const updateUser = async (id: any, data: any) => {
  return await prisma.user.update({ where: { id: id }, data });
};

// Delete a user
const deleteUser = async (id: any) => {
  return await prisma.user.delete({ where: { id: id } });
};

export default { getAllUsers, createUser, getUserById, updateUser, deleteUser };
