
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800/30 text-gray-500 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src="https://github.com/blippey/lipco-assets/blob/ec92cdae5c280b9213b26da7dfdf2480cf07c23e/Lipco-logo.png?raw=true" 
            alt="The Lippey Company" 
            className="h-10 mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
        <p className="text-sm">
          &copy; 1947 - {currentYear} The Lippey Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;