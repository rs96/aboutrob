import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

interface HeaderProps {
  sections: string[];
}

const Header = ({ sections }: HeaderProps) => (
  <div className="header">
    <div className="title">about:rob</div>
    <div className="sections">
      {sections.map((section) => (
        <div key={section} className="section">
          <Link to={`/${section.toLowerCase()}`}>{section}</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Header;
