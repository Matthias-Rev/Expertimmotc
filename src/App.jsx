// src/App.jsx
import React from 'react';
import Header from './components/Header';
import CTASection from './components/cta-section';
import HeroSection from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="h-24" /> {/* Increased height */}
      <main className="flex flex-col flex-grow">
        <HeroSection />
        <CTASection />
      </main>
      <Footer className="h-24" /> {/* Increased height */}
    </div>
  );
};

export default App;
