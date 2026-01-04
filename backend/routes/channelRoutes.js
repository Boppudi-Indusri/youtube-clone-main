import express from "express";
import Channel from "../models/Channel.js";

const router = express.Router();

// Create channel
router.post("/", async (req, res) => {
  try {
    const channel = await Channel.create(req.body);
    res.status(201).json(channel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get channel
router.get("/:id", async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    res.json(channel);
  } catch (err) {
    res.status(404).json({ message: "Channel not found" });
  }
});

export default router;
