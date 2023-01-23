import React from "react";
import Card from "../../components/card";
import "./fontCard.css";

interface FontCardProps {
    name: string;
}

export const FontCard = ({ name }: FontCardProps) => (
    <Card>
        <div className="font-name" style={{ fontFamily: name }}>
            {name}
        </div>
        <div className="font-example" style={{ fontFamily: name }}>
            The quick brown fox jumps over the lazy dog
        </div>
        <div className="font-example-subtle" style={{ fontFamily: name }}>
            The quick brown fox jumps over the lazy dog
        </div>
    </Card>
);
