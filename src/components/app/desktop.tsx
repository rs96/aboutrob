import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fonts } from "../../sections/fonts/fonts";
import { Header } from "../header";

export const DesktopApp = () => (
  <Router>
    <Header
      sections={["Main", "Links", "Library", "Tools", "Fonts", "Colours"]}
    />
    <div className="main-body">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/fonts" element={<Fonts />} />
        <Route path="/colours" element={<div>Colours</div>} />
      </Routes>
    </div>
  </Router>
);
