import React, { useRef } from 'react';

const assetBase = 'https://github.com/blippey/lipco-assets/blob/87e47ed4fefd6599098f95468bb0641e4f388a90/';

const PROPERTIES = [
  { id: 1, img: `${assetBase}2.avif?raw=true` },
  { id: 2, img: `${assetBase}3.jpg?raw=true` },
  { id: 3, img: `${assetBase}4.jpg?raw=true` },
  { id: 4, img: `${assetBase}5.jpg?raw=true` },
  { id: 5, img: `${assetBase}6.jpg?raw=true` },
];

const PropertiesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="properties" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">Our Portfolio</h2>
            <p className="text-slate-400 text-lg">A selection of high-quality industrial assets we actively manage and represent.</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-700 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-700 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROPERTIES.map((prop) => (
            <div 
              key={prop.id} 
              className="min-w-[320px] md:min-w-[450px] snap-center group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video">
                <img 
                  src={prop.img} 
                  alt={`Property ${prop.id}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesCarousel;