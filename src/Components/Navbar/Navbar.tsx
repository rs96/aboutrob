import React from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css'

type NavbarProps = {
  items: string[],
}

const Navbar = ({ items }: NavbarProps) => (
  <div className="Navbar">
    {items.map((item: string) => <NavbarItem label={item} />)}
  </div>
);

export default Navbar;
