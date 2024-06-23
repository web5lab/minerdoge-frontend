import React, { useState } from 'react';

const BottomSheet = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Bottom Sheet */}
      <div
        className="absolute bottom-0  w-full bg-black rounded-t-3xl p-4 shadow-lg"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
