import React from "react";
import { isMobile } from "../../queries";
import { FontCard } from "./fontCard";

export const Fonts = () => (
  <div className={`font-page card-area ${isMobile() && "mobile"}`}>
    {["Test", "Example", "This One", "And Another"].map((font) => (
      <FontCard name={font} />
    ))}
  </div>
);
