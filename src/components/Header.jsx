// src/components/Header.jsx
import React from 'react';
import logo from '../Image/expertimmotc_picture.png';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center p-6 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="Thomas Logo"
          className="h-32 w-32 object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h1 className="text-5xl font-semibold text-gray-900 font-heading">Thomas Colenbie</h1>
        <h2 className="text-2xl text-gray-600 font-sans">Expertise, états des lieux locatifs</h2>
      </div>
    </header>
  );
};

export default Header;