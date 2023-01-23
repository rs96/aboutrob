import React from "react";
import { isMobile } from "../../queries";
import { FontCard } from "./fontCard";

export const Fonts = () => (
    <div className={`font-page card-area ${isMobile() && "mobile"}`}>
        {[
            "Helvetica",
            "Verdana",
            "Comic Sans MS",
            "Times New Roman",
            "Arial",
            "Arial Black",
            "Tahoma",
            "Trebuchet MS",
            "Impact",
            "Gill Sans",
            "Georgia",
            "Palatino",
        ].map((font) => (
            <FontCard name={font} key={font} />
        ))}
    </div>
);
