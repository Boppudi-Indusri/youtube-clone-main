import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Add comment
router.post("/", async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
});

// Get comments for a video
router.get("/:videoId", async (req, res) => {
  const comments = await Comment.find({ videoId: req.params.videoId })
    .populate("user", "username");
  res.json(comments);
});

export default router;
