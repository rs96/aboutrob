import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fonts } from "../../sections/fonts/fonts";
import { Colours } from "../../sections/colours/colours";
import { Basketball } from "../../sections/canvas-games/basketball";
import { Header } from "../header";
import Player from "../player";

export const DesktopApp = () => (
    <Router>
        <Header
            sections={[
                "Main",
                "Links",
                "Video",
                "Tools",
                "Fonts",
                "Colours",
                "Game",
            ]}
        />
        <div className="main-body">
            <Routes>
                <Route path="/aboutrob/" element={<div>Home</div>} />
                <Route path="/aboutrob/fonts" element={<Fonts />} />
                <Route path="/aboutrob/colours" element={<Colours />} />
                <Route path="/aboutrob/video" element={<Player />} />
                <Route path="/aboutrob/game" element={<Basketball />} />
            </Routes>
        </div>
    </Router>
);
