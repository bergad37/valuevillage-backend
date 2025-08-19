
import express from "express";
import userService from "../services/userService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginValidation } from "../validation/authValidation";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

const router = express.Router();

/**
 * POST /auth/login
 * Login with email and password
 * Body: { email, password }
 */

import { login } from "../controllers/authController";

import { NextFunction } from "express";

router.post("/login", loginValidation, (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'error', message: 'Validation error', data: errors.array() });
  }
  return login(req, res, next);
});

export default router;
