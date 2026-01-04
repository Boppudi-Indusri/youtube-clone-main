import Video from "../models/Video.js";
import Channel from "../models/Channel.js";

/* ===============================
   CREATE VIDEO
================================ */
export const createVideo = async (req, res) => {
  try {
    const { title, description, videoUrl, thumbnailUrl, category } = req.body;

    if (!title || !videoUrl || !thumbnailUrl) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // find user's channel
    const channel = await Channel.findOne({ owner: req.user.id });

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    const video = await Video.create({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      category,
      channel: channel._id,
      uploader: req.user.id,
    });

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ===============================
   GET ALL VIDEOS
================================ */
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("uploader", "username")
      .populate("channel", "channelName")
      .sort({ createdAt: -1 });

    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ===============================
   GET SINGLE VIDEO
================================ */
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate("uploader", "username")
      .populate("channel", "channelName");

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
