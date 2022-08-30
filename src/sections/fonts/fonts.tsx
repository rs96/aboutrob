import React from "react";
import { FontCard } from "./fontCard";

export const Fonts = () => (
  <div className="font-page card-area">
    {["Test", "Example", "This One", "And Another"].map((font) => (
      <FontCard name={font} />
    ))}
  </div>
);
