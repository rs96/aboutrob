import React from "react";
import Card from "../../components/card";
import "./fontCard.css";

interface FontCardProps {
  name: string;
}

export const FontCard = ({ name }: FontCardProps) => (
  <Card>
    <div className="font-name">{name}</div>
    <div className="font-example">
      This is an example piece of text to demonstrate the font.
    </div>
    <div className="font-example-subtle">
      And a slightly more subtle piece of text in italic.
    </div>
  </Card>
);
