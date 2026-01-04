import VideoCard from "./VideoCard";
import "../styles/videocard.css";
import React from "react";
const VideoGrid = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return <h3>No videos found</h3>;
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
