







import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import videosData from "../data/videos";
import "../styles/watch.css";

const Watch = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  /* ---------------- LOAD VIDEOS ---------------- */
  const channelVideos = Object.keys(localStorage)
    .filter((key) => key.startsWith("channel_"))
    .flatMap((key) => JSON.parse(localStorage.getItem(key)) || []);

  const allVideos = [...videosData, ...channelVideos];
  const video = allVideos.find((v) => v.videoId === videoId);

  if (!video) return <h2 style={{ textAlign: "center" }}>Video not found</h2>;

  /* ---------------- YOUTUBE ID ---------------- */
  const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
    );
    return match ? match[1] : null;
  };

  const ytId = video.videoUrl
    ? getYouTubeId(video.videoUrl)
    : video.videoId;

  /* ---------------- COMMENTS ---------------- */
  const commentsKey = `comments_${videoId}`;

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(commentsKey)) || [];
    setComments(saved);
  }, [commentsKey]);

  /* ADD COMMENT */
  const addComment = () => {
    if (!user) {
      alert("Please login to comment");
      return;
    }

    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentText,
      username: user.username || user.email,
      userId: user.id, // 🔒 OWNER ID
      createdAt: new Date().toISOString(),
    };

    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(commentsKey, JSON.stringify(updated));
    setCommentText("");
  };

  /* DELETE COMMENT (ONLY OWNER) */
  const deleteComment = (commentId) => {
    const comment = comments.find((c) => c.id === commentId);
    if (!user || comment.userId !== user.id) return;

    const updated = comments.filter((c) => c.id !== commentId);
    setComments(updated);
    localStorage.setItem(commentsKey, JSON.stringify(updated));
  };

  /* EDIT COMMENT (ONLY OWNER) */
  const startEdit = (comment) => {
    if (!user || comment.userId !== user.id) return;
    setEditingId(comment.id);
    setEditText(comment.text);
  };

  const saveEdit = (commentId) => {
    const comment = comments.find((c) => c.id === commentId);
    if (!user || comment.userId !== user.id) return;

    const updated = comments.map((c) =>
      c.id === commentId ? { ...c, text: editText } : c
    );

    setComments(updated);
    localStorage.setItem(commentsKey, JSON.stringify(updated));
    setEditingId(null);
    setEditText("");
  };

  /* ---------------- SUGGESTED VIDEOS ---------------- */
  const suggestedVideos = allVideos.filter(
    (v) => v.videoId !== videoId
  );

  return (
    <div className="watch-layout">
      {/* LEFT */}
      <div className="watch-left">
        <iframe
          width="100%"
          height="420"
          src={`https://www.youtube.com/embed/${ytId}`}
          title={video.title}
          allowFullScreen
        />

        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <h4>{video.uploader || video.owner}</h4>

        {/* COMMENTS */}
        <div className="comments-section">
          <h3>Comments</h3>

          {user ? (
            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button onClick={addComment}>Comment</button>
            </div>
          ) : (
            <p>Please login to comment.</p>
          )}

          <div className="comments-list">
            {comments.length === 0 && <p>No comments yet</p>}

            {comments.map((c) => {
              const isOwner = user && c.userId === user.id;

              return (
                <div key={c.id} className="comment">
                  <strong>{c.username}</strong>

                  {editingId === c.id ? (
                    <>
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button onClick={() => saveEdit(c.id)}>Save</button>
                      <button onClick={() => setEditingId(null)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <p>{c.text}</p>
                  )}

                  {/* 🔒 ONLY OWNER CAN SEE THESE */}
                  {isOwner && editingId !== c.id && (
                    <div className="comment-actions">
                      <button onClick={() => startEdit(c)}>Edit</button>
                      <button onClick={() => deleteComment(c.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="watch-right">
        {suggestedVideos.map((v) => (
          <div
            key={v.videoId}
            className="suggested-video"
            onClick={() => navigate(`/watch/${v.videoId}`)}
          >
            <img src={v.thumbnailUrl} alt={v.title} />
            <p>{v.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;






























