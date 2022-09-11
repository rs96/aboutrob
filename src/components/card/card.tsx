import React from "react";
import { isMobile } from "../../queries";
import "./card.css";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className={`card ${isMobile() && "mobile"}`}>{children}</div>
);
