// src/components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '../Image/expertimmotc_picture.png'; // Adjust the path and extension if necessary

export default function Footer() {
  return (
    <footer className="bg-[#2D4052] text-white p-12"> {/* Increased padding from p-8 to p-12 */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Contact Section */}
        <div className="flex items-center gap-6"> {/* Increased gap from gap-4 to gap-6 */}
          {/* Logo Section */}
          <div className="w-24 h-24 flex items-center justify-center"> {/* Increased width and height from w-20 h-20 to w-24 h-24 */}
            <img
              src={logo}
              alt="Thomas Logo"
              className="object-contain h-full w-full"
            />
          </div>
          {/* Contact Information */}
          <div>
            <p className="text-lg font-sans">Contactez-moi par </p> {/* Ensured consistent font size */}
            <p className="text-lg font-sans">Email : expertimmotc@gmail.com</p>
            <p className="text-lg font-sans">Tél : 0488584848</p>
          </div>
        </div>
        <div className="text-xl font-sans"> {/* Increased font size from text-lg to text-xl */}
            © {new Date().getFullYear()} Thomas Colenbie. Tous droits réservés.
          </div>
        {/* Social Media Links */}
        {/* <div className="mt-6 md:mt-0"> 
          <p className="mb-4 text-lg font-sans">Suivez-moi sur les réseaux:</p> {/* Increased margin-bottom and font size 
          <div className="flex gap-6"> {/* Increased gap from gap-4 to gap-6 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-8 h-8 hover:text-gray-400" /> {/* Increased size from w-6 h-6 to w-8 h-8 
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 hover:text-gray-400" />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
