import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header bg-blue-600 text-white p-4">
      <nav className="container mx-auto">
        <h1 className="text-3xl font-bold">Azubi Cloud Institute Nexus</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
