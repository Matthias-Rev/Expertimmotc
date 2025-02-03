// src/components/LayeredShapes.jsx
import React from 'react';
import '../LayeredShapes.css';

const LayeredShapes = ({ children }) => {
  return (
    <div className="layer-container">
      <div className="shape shape-light"></div>
      <div className="shape shape-dark"></div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default LayeredShapes;
