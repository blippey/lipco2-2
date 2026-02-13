
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-12 pb-24 bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-serif text-white mb-4">Specializing in Industrial Leasing</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Connecting businesses with the right industrial properties to foster growth and efficiency in the greater Los Angeles area.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-left">
            <div className="text-teal-400 flex-shrink-0 animate-pulse-slow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7l8-4 8 4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 11v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-6">Expert Industrial & Warehouse Space Solutions</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                The Lippey Company focuses exclusively on industrial leasing, providing unparalleled expertise in the market. We assist clients in finding the ideal warehouse, manufacturing, or distribution facilities to meet their specific operational needs. Our deep understanding of industrial properties ensures you secure a space that enhances your productivity and supports your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;