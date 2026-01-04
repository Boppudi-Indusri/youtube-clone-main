// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// // ROUTES
// import authRoutes from "./routes/authRoutes.js";
// import channelRoutes from "./routes/channelRoutes.js";
// import videoRoutes from "./routes/videoRoutes.js";
// import commentRoutes from "./routes/commentRoutes.js";

// dotenv.config();

// const app = express();

// // ✅ MIDDLEWARES
// app.use(cors());
// app.use(express.json());

// // ✅ CONNECT DATABASE
// connectDB();

// // ✅ BASE ROUTE (TEST)
// app.get("/", (req, res) => {
//   res.send("🚀 YouTube Clone Backend Running");
// });

// // ✅ API ROUTES
// app.use("/api/auth", authRoutes);       // signup, login
// app.use("/api/channels", channelRoutes); // create & fetch channel
// app.use("/api/videos", videoRoutes);     // fetch, update, delete videos
// app.use("/api/comments", commentRoutes); // add & fetch comments

// // ✅ SERVER LISTEN
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });


















import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import videoRoutes from "./routes/videoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/youtube_clone")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/videos", videoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
