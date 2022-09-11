import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

interface HeaderProps {
  sections: string[];
}

const Header = ({ sections }: HeaderProps) => (
  <div className="header mobile">
    <div className="title mobile">about:rob</div>
    <div className="sections mobile">
      {sections.map((section) => (
        <div key={section} className="section mobile">
          <Link to={`/${section.toLowerCase()}`}>{section}</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Header;
