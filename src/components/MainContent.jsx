// src/components/MainContent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import image from '../Image/expertimmotc_pdp.jpg'; // Ensure this path is correct

export default function HeroSection() {
  return (
    <section className="w-full bg-[#2D4052] text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        {/* <div className="lg:w-1/2 mt-8 lg:mt-0"> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
            Thomas Colenbie
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans mb-6">
            Expertise en Immobilier & États des Lieux Locatifs
          </h2>
          <div className="text-base md:text-lg font-sans mb-6">
            <p>
              Actif dans le domaine de l'immobilier depuis 20 ans, j'accompagne les propriétaires,
              locataires, gestionnaires de biens et agences immobilières en assurant des états des lieux
              précis, impartiaux et conformes aux exigences légales ainsi que des expertises réalistes
              et conformes au marché immobilier.
            </p>

            <p>
              Ma priorité est d’offrir un service professionnel, rapide et transparent, afin de faciliter la
              relation entre les parties et de prévenir d’éventuels litiges.
            </p>

            <p>
              Mon objectif est simple : faciliter vos démarches, prévenir les litiges et établir une relation de
              confiance entre toutes les parties.
            </p>

            <p>En bref, je vous propose :</p>

            <ul className="list-none pl-4">
              <li className="flex items-start mb-2">
                <span className="mr-2">-</span>
                <span>
                  Des états des lieux et des expertises détaillés, enrichis de photos pour une documentation
                  complète.
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="mr-2">-</span>
                <span>
                  Un rapport clair et professionnel, rédigé dans un langage accessible pour éviter toute
                  ambiguïté.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  Une tarification transparente et compétitive, sans mauvaises surprises.
                </span>
              </li>
            </ul>
          </div>

          {/* <button className="px-8 py-3 bg-[#5B7083] text-white rounded-md hover:bg-[#4A5D6E] transition-colors duration-300 text-lg font-sans">
            Contactez-moi
          </button> */}
        {/* </div> */}
        </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt="Thomas Colenbie, votre expert immobilier"
              className="w-full max-w-md rounded-md object-cover shadow-lg"
              loading="lazy"
            />
          </motion.div>
      </div>
    </section>
  );
}
