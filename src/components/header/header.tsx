import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { getActiveClassName } from "../../queries";

interface HeaderProps {
    sections: string[];
}

const Header = ({ sections }: HeaderProps) => (
    <div className="header">
        <div className="title">about:rob</div>
        <div className="sections">
            {sections.map((section) => (
                <div key={section} className="section">
                    <NavLink
                        className={getActiveClassName}
                        to={`/${section.toLowerCase()}`}
                    >
                        {section}
                    </NavLink>
                </div>
            ))}
        </div>
    </div>
);

export default Header;
