// frontend/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary text-red-950 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Swara Sanjeevani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
