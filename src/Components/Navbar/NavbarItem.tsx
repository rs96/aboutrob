import React from 'react';

type NavbarItemProps = {
    label: string,
}

const NavbarItem = ({ label }: NavbarItemProps) => (
    <div className="NavbarItem">
        <div>{label}</div>
    </div>
);

export default NavbarItem;
