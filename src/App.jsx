











import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Channel from "./pages/Channel";
import AuthPage from "./auth/AuthPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* HEADER ON EVERY PAGE */}
      <Header
        setSearchTerm={setSearchTerm}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* SIDEBAR ON EVERY PAGE */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;


