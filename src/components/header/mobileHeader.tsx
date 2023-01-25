import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { getActiveClassName } from "../../queries";

interface HeaderProps {
    sections: string[];
}

const Header = ({ sections }: HeaderProps) => (
    <div className="header mobile">
        <div className="title mobile">about:rob</div>
        <div className="sections mobile">
            {sections.map((section) => (
                <div key={section} className="section mobile">
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
