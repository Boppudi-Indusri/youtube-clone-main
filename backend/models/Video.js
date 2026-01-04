import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,

    videoUrl: { type: String, required: true },       // ✅ stored URL
    thumbnailUrl: { type: String, required: true },   // ✅ stored URL

    category: String,
    views: { type: Number, default: 0 },

    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },

    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
