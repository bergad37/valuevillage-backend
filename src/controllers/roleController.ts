import { Request, Response, NextFunction } from "express";
import { success, error } from "../utils/response";
import RoleService from "../services/roleService";

const createRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json(error("Role name is required"));
  const role = await RoleService.createRole(name);
    res.status(201).json(success("Role created", role));
  } catch (err) {
    next(err);
  }
};

const getAllRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const roles = await RoleService.getAllRoles();
    res.json(success("Roles fetched", roles));
  } catch (err) {
    next(err);
  }
};

const getRoleById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
  const role = await RoleService.getRoleById(id);
    if (!role) return res.status(404).json(error("Role not found"));
    res.json(success("Role fetched", role));
  } catch (err) {
    next(err);
  }
};

const updateRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).json(error("Role name is required"));
  const role = await RoleService.updateRole(id, name);
    if (!role) return res.status(404).json(error("Role not found"));
    res.json(success("Role updated", role));
  } catch (err) {
    next(err);
  }
};

const deleteRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
  const role = await RoleService.deleteRole(id);
    if (!role) return res.status(404).json(error("Role not found"));
    res.json(success("Role deleted", role));
  } catch (err) {
    next(err);
  }
};

export default {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
};
