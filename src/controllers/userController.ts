// src/controllers/userController.js
import { Request, Response } from 'express';
import userService from '../services/userService';

// Get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ data: users, success: true, mesage: 'Users list have been fetched successfully' });
  } catch (error: any) {
    res.status(500).json({ error: `Failed to fetch users ${error.message}` });
  }
};

// Create a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ data: user, success: true, message: 'User saved fetched successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
};

// Get a user by ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.json({ data: user, success: true });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update a user
const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.json({ data: updatedUser, success: true });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update user' });
  }
};

// Delete a user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userDeleted = await userService.deleteUser(req.params.id);
    res.status(204).send({ success: userDeleted });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete user' });
  }
};

export default { getAllUsers, createUser, getUserById, updateUser, deleteUser };
