import React from "react";
import Card from "../../components/card";
import "./colourCard.css";

interface ColourCardProps {
    colours: string[];
}

export const ColourCard = ({ colours }: ColourCardProps) => (
    <Card>
        {colours.map((colour) => (
            <div className="colour-flake" style={{ background: colour }}></div>
        ))}
    </Card>
);
