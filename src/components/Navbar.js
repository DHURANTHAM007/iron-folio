import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const NavLink = ({ href, children, isActive }) => (
  <a href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
    {children}
  </a>
);

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <nav className="navbar fixed w-full z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl tech-font font-bold text-white flex items-center">
          <span className="text-iron-red mr-1">{'<'}</span>ANJOSH<span className="text-iron-red ml-1">{'/>'}</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <NavLink key={link.href} href={link.href} isActive={activeSection === link.href.substring(1)}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          <FaBars className="text-xl" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden w-full bg-darker py-4 px-4 mt-3">
          <div className="flex flex-col space-y-4">
            {links.map(link => (
              <NavLink key={link.href} href={link.href} isActive={activeSection === link.href.substring(1)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;