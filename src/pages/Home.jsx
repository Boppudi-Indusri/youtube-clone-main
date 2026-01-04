

import React, { useState } from "react";
import videosData from "../data/videos";
import CategoryBar from "../components/CategoryBar";
import VideoGrid from "../components/VideoGrid";
import "../styles/home.css";

const Home = ({ searchTerm = "" }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = videosData.filter((video) => {
    const title = video?.title?.toLowerCase() || "";
    const category = video?.category?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();

    const matchesCategory =
      selectedCategory === "All" ||
      category === selectedCategory.toLowerCase();

    const matchesSearch = title.includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-layout">
      <div className="home-content">
        <CategoryBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <VideoGrid videos={filteredVideos} />
      </div>
    </div>
  );
};

export default Home;
