import express from "express";
import {
  createVideo,
  getAllVideos,
  getVideoById,
} from "../controllers/videoController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createVideo);     // ➕ Upload video
router.get("/", getAllVideos);                     // 📺 All videos
router.get("/:id", getVideoById);                  // ▶️ Single video

export default router;
