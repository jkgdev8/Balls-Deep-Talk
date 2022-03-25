import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto  p-4">
      <div >
        &copy;{new Date().getFullYear()} by JDM Sports
      </div>
    </footer>
  );
};

export default Footer;
