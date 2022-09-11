import React from "react";
import content from "./deadclever.mp4";
import "./player.css";

export const Player = () => (
  <div className="player">
    <video controls>
      <source src={content} type="video/mp4" />
      Your browser doesn't support HTML video.
    </video>
  </div>
);
