







import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = ({ toggleSidebar, setSearchTerm }) => {
  const navigate = useNavigate();

  // ✅ SAFE USER READ
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="yt-header">
      {/* LEFT */}
      <div className="header-left">
        <FiMenu className="icon" onClick={toggleSidebar} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* CENTER */}
      <div className="header-center">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">
          <IoSearchOutline />
        </button>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {/* ✅ USERNAME ALWAYS VISIBLE */}
        <span className="username">
          {user ? user.username : "Guest"}
        </span>

        {!user ? (
          <button
            className="signin-btn"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        ) : (
          <>
            <button
              className="channel-btn"
              onClick={() => navigate("/channel")}
            >
              My Channel
            </button>

            <button
              className="signout-btn"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

