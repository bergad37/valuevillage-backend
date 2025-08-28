import express from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import propertyRoutes from './propertyRoutes';
import blogRoutes from './blogRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/property', propertyRoutes);
router.use('/blog', blogRoutes);
// Add more routes here as your app grows

export default router;
