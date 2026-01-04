










import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/channel.css";

const Channel = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>Please login</h2>;
  }

  const channelKey = `channel_${user.username}`;

  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(channelKey)) || [];
    setVideos(saved);
  }, [channelKey]);

  const saveVideos = (updated) => {
    setVideos(updated);
    localStorage.setItem(channelKey, JSON.stringify(updated));
  };

  // ✅ Extract YouTube ID correctly
  const getVideoId = (url) => {
    if (url.includes("watch?v=")) {
      return url.split("watch?v=")[1].split("&")[0];
    }
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1];
    }
    return "";
  };

  const addVideo = () => {
    if (!title || !videoUrl) return alert("Fill all fields");

    const videoId = getVideoId(videoUrl);
    if (!videoId) return alert("Invalid YouTube URL");

    const newVideo = {
      id: editId || Date.now(),
      videoId, // ✅ VERY IMPORTANT
      title,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      owner: user.username,
    };

    const updated = editId
      ? videos.map((v) => (v.id === editId ? newVideo : v))
      : [...videos, newVideo];

    saveVideos(updated);
    setTitle("");
    setVideoUrl("");
    setEditId(null);
  };

  const deleteVideo = (id) => {
    saveVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="channel-page">
      <h2>{user.username}'s Channel</h2>

      <div className="upload-box">
        <input
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="YouTube Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button onClick={addVideo}>
          {editId ? "Update Video" : "Add Video"}
        </button>
      </div>

      <div className="channel-videos">
        {videos.length === 0 && <p>No videos uploaded yet</p>}

        {videos.map((video) => (
          <div
            key={video.id}
            className="channel-video"
            onClick={() => navigate(`/watch/${video.videoId}`)} // ✅ CLICK TO PLAY
          >
            <img src={video.thumbnailUrl} alt={video.title} />
            <h4>{video.title}</h4>

            <div className="video-actions">
              <button onClick={(e) => { e.stopPropagation(); deleteVideo(video.id); }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;












































