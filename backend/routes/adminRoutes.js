import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  updateAdminProfile,
  getAllAdmins,
  deleteAdmin,
} from "../controllers/adminController.js";
import { protect, isSuperAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected routes
router
  .route("/profile")
  .get(protect, getAdminProfile)
  .put(protect, updateAdminProfile);

// Super admin only routes
router.get("/all", protect, isSuperAdmin, getAllAdmins);
router.delete("/:id", protect, isSuperAdmin, deleteAdmin);

export default router;
