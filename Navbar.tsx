import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="https://github.com/blippey/lipco-assets/blob/ec92cdae5c280b9213b26da7dfdf2480cf07c23e/Lipco-logo.png?raw=true" 
              alt="The Lippey Company" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-wider">About</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-wider">Leasing</a>
            <a href="#properties" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-wider">Properties</a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-slate-900 border-b border-slate-800 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-200 hover:text-blue-400 transition-colors font-medium">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-slate-200 hover:text-blue-400 transition-colors font-medium">Industrial Leasing</a>
          <a href="#properties" onClick={() => setIsOpen(false)} className="block text-slate-200 hover:text-blue-400 transition-colors font-medium">Properties</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-blue-400 font-bold">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;