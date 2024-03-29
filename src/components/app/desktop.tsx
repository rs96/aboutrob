import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fonts } from "../../sections/fonts/fonts";
import { Colours } from "../../sections/colours/colours";
import { Basketball } from "../../sections/canvas-games/basketball";
import { Header } from "../header";
import Player from "../player";

export const DesktopApp = () => (
    <Router basename="/aboutrob">
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
                <Route path="/" element={<div>Home</div>} />
                <Route path="/fonts" element={<Fonts />} />
                <Route path="/colours" element={<Colours />} />
                <Route path="/video" element={<Player />} />
                <Route path="/game" element={<Basketball />} />
            </Routes>
        </div>
    </Router>
);
