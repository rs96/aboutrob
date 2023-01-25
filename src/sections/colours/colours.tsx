import React from "react";
import { isMobile } from "../../queries";
import { ColourCard } from "./colourCard";

export const Colours = () => (
    <div className={`colour-page card-area${isMobile() ? " mobile" : ""}`}>
        {[
            ["#001122", "#445566", "#77AA11", "#000022"],
            ["#001122", "#445566", "#77AA11", "#000022"],
            ["#001122", "#445566", "#77AA11", "#000022"],
            ["#001122", "#445566", "#77AA11", "#000022"],
        ].map((colours) => (
            <ColourCard colours={colours} key={colours.toString()} />
        ))}
    </div>
);
