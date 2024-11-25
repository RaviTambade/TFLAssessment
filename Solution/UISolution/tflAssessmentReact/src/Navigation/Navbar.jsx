import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Transflower
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-blue-200">Home</Link></li>
          <li><Link to="/login" className="text-white hover:text-blue-200">Login</Link></li>
          <li><Link to="/login" className="text-white hover:text-blue-200">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
