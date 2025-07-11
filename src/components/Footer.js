import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400">DESIGN PROTOCOL: IRON MAN | SYSTEM KERNEL: REACT.JS</p>
        </div>
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Anjosh J A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;