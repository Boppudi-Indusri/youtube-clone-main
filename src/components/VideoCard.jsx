

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/videocard.css";

function VideoCard({ video }) {
  const navigate = useNavigate();

  // ✅ SUPPORT BOTH Home & Channel videos
  const videoKey = video.videoId || video.id;

  return (
    <div
      className="video-card"
      onClick={() => navigate(`/watch/${videoKey}`)}
    >
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="video-thumbnail"
      />

      <div className="video-info">
        <h4 className="video-title">{video.title}</h4>
        <p className="video-channel">
          {video.uploader || video.owner}
        </p>
        <p className="video-views">
          {video.views || 0} views
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
