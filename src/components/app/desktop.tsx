import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fonts } from "../../sections/fonts/fonts";
import { Header } from "../header";
import Player from "../player";

export const DesktopApp = () => (
  <Router>
    <Header
      sections={["Main", "Links", "Video", "Tools", "Fonts", "Colours"]}
    />
    <div className="main-body">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/fonts" element={<Fonts />} />
        <Route path="/colours" element={<div>Colours</div>} />
        <Route path="/video" element={<Player />} />
      </Routes>
    </div>
  </Router>
);
