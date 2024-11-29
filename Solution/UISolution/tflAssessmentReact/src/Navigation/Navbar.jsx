import React from 'react';
import { Link } from 'react-router-dom';
import { useNavbar } from './NavbarContext';

function Navbar() {
  const context = useNavbar();
  const { navLinks } = context;

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Transflower
        </Link>

        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-white hover:text-blue-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
