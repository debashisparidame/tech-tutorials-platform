import express from "express";
import {
  getAllBlogs,
  getBlogBySlug,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogsAdmin,
  likeBlog,
  getBlogStats,
} from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllBlogs);
router.get("/slug/:slug", getBlogBySlug);
router.put("/:id/like", likeBlog);

// Admin routes (protected)
router.post("/admin", protect, createBlog);
router.get("/admin/all", protect, getAllBlogsAdmin);
router.get("/admin/stats", protect, getBlogStats);
router.get("/admin/:id", protect, getBlogById);
router.put("/admin/:id", protect, updateBlog);
router.delete("/admin/:id", protect, deleteBlog);

export default router;
