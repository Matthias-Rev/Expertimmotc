// src/components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '../Image/expertimmotc_picture.png';

export default function Footer() {
  return (
    <footer className="bg-[#2D4052] text-white p-8 sm:p-12">
      {/* 
        - flex-col: stacks items vertically on small screens.
        - md:flex-row: arranges items in a row on medium+ screens.
        - space-y-8: adds vertical spacing when items are stacked.
        - md:space-y-0: removes vertical spacing on larger screens.
      */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Logo and Contact Section */}
        <div className="flex items-center gap-6">
          {/* Logo Section */}
          {/* <div className="w-24 h-24 flex items-center justify-center">
            <img
              src={logo}
              alt="Thomas Logo"
              className="object-contain h-full w-full"
            />
          </div> */}
          {/* Contact Information */}
          <div>
            <p className="text-lg font-sans">Contactez-moi par</p>
            <p className="text-lg font-sans">Email : expertimmotc@gmail.com</p>
            <p className="text-lg font-sans">Tél : 0488584848</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xl font-sans text-center">
          © {new Date().getFullYear()} Thomas Colenbie. Tous droits réservés.
        </div>

        {/*
          If you want to include Social Media Links in the future, you can uncomment and adjust as needed.
          Make sure to wrap them in a responsive container similar to the others.
        */}
        {/*
        <div className="mt-6 md:mt-0">
          <p className="mb-4 text-lg font-sans">Suivez-moi sur les réseaux:</p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-8 h-8 hover:text-gray-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 hover:text-gray-400" />
            </a>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
}