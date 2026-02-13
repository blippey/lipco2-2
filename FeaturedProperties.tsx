import React from 'react';

const FeaturedProperties: React.FC = () => {
  const assetBase = 'https://github.com/blippey/lipco-assets/blob/ec92cdae5c280b9213b26da7dfdf2480cf07c23e/';

  return (
    <section id="properties" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section 1: Featured Building For Lease - 1550 N San Fernando Rd */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">Featured Building For Lease</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">1550 N San Fernando Rd, Los Angeles, CA 90065</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <div className="relative group max-w-md mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-500 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-1"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={`${assetBase}1550-1.jpg?raw=true`} 
                  alt="1550 N San Fernando Rd Exterior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="relative group max-w-md mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={`${assetBase}1550-2.jpg?raw=true`} 
                  alt="1550 N San Fernando Rd Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.loopnet.com/Listing/1550-N-San-Fernando-Rd-Los-Angeles-CA/38309006/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30 active:scale-95"
            >
              <span>View Full Lease Listing</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        {/* Section 2: Featured Building For Sale - 1803 N San Fernando Rd */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">Featured Building For Sale</h2>
            <div className="h-1 w-24 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">1803 N San Fernando Rd, Los Angeles, CA 90065</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <div className="relative group max-w-md mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-1"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={`${assetBase}1803-1.jpg?raw=true`} 
                  alt="1803 N San Fernando Rd Exterior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="relative group max-w-md mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-500 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={`${assetBase}1803-2.jpg?raw=true`} 
                  alt="1803 N San Fernando Rd Interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.loopnet.com/Listing/1803-N-San-Fernando-Rd-Los-Angeles-CA/37865792/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-teal-500/30 active:scale-95"
            >
              <span>View Full Sale Listing</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;