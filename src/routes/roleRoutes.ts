import express from "express";
import { authenticateToken } from "../middleware/authenticate";
import { authorizeRoles } from "../middleware/authorizeRoles";
import roleController from "../controllers/roleController";

const router = express.Router();

// Only admin can manage roles
router.post("/", authenticateToken, authorizeRoles("admin"), roleController.createRole);
router.get("/", authenticateToken, authorizeRoles("admin"), roleController.getAllRoles);
router.get("/:id", authenticateToken, authorizeRoles("admin"), roleController.getRoleById);
router.put("/:id", authenticateToken, authorizeRoles("admin"), roleController.updateRole);
router.delete("/:id", authenticateToken, authorizeRoles("admin"), roleController.deleteRole);

export default router;
