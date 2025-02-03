// src/components/cta-section.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tarifsPDF from '../docs/tarifs.pdf'; // Ensure the PDF is placed correctly in src/docs/

export default function CTASection() {

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-16 px-4">
        {/* First Column */}
        <motion.div
          className="bg-gray-50 p-8 rounded-lg text-center flex flex-col justify-end font-sans"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl mb-6">
            Découvrez nos tarifs et trouvez l'offre qui vous convient...
          </h3>
          <a
            href={tarifsPDF}
            download
            className="bg-[#5B7083] text-white text-xl px-16 py-5 rounded-md hover:bg-[#4A5D6E] transition-colors w-full font-sans"
          >
            Mes tarifs
          </a>
        </motion.div>
        
        {/* Second Column */}
        <motion.div
            className="relative bg-gray-50 p-8 rounded-lg text-center flex flex-col justify-end font-sans"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Under Construction Banner */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-3 py-1 rounded-bl-lg z-10">
              En construction
            </div>
            
            {/* Blurred Content */}
            <div className="filter blur-[2px]">
              <h3 className="text-3xl md:text-4xl mb-6">
                Une prise de rendez-vous facile et à votre écoute.
              </h3>
              <button
                className="bg-[#5B7083] text-white text-xl px-16 py-5 rounded-md transition-colors w-full font-sans opacity-50 cursor-not-allowed"
                disabled
              >
                Prise de rendez-vous
              </button>
            </div>
          </motion.div>

      </div>
    </>
  );
}