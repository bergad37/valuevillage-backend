
import { Request, Response, NextFunction } from "express";
import userService from "../services/userService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { success, error } from "../utils/response";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(401).json(error("Invalid credentials"));
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json(error("Invalid credentials"));
    }
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.roleId },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" }
    );
    return res.json(success("Login successful", { token, user: { id: user.id, email: user.email, name: user.name, roleId: user.roleId } }));
  } catch (err) {
    next(err);
  }
};
