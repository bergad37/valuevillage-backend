// src/routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// Define routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
