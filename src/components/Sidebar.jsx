

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <button
        className="sidebar-item"
        onClick={() => {
          navigate("/");
          closeSidebar();
        }}
      >
        <AiFillHome className="sidebar-icon" />
        <span>Home</span>
      </button>

      <button className="sidebar-item">
        <SiYoutubeshorts className="sidebar-icon" />
        <span>Shorts</span>
      </button>

      <button className="sidebar-item">
        <MdSubscriptions className="sidebar-icon" />
        <span>Subscriptions</span>
      </button>
    </div>
  );
};

export default Sidebar;
