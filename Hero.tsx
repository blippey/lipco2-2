import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg relative min-h-[70vh] flex flex-col justify-center items-center text-center text-white px-4">
      <div className="max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-7xl font-bold font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400 mb-6">
          Specialists in Industrial Real Estate
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your dedicated partner for industrial leasing in the greater Los Angeles area
        </p>
      </div>
    </section>
  );
};

export default Hero;