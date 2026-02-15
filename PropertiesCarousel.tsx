import React, { useRef, useEffect } from 'react';

const assetBase = 'https://github.com/blippey/lipco-assets/blob/main/';

const PROPERTIES = [
  { id: 1, img: `${assetBase}2.avif?raw=true` },
  { id: 2, img: `${assetBase}3.jpg?raw=true` },
  { id: 3, img: `${assetBase}4.jpg?raw=true` },
  { id: 4, img: `${assetBase}5.jpg?raw=true` },
  { id: 5, img: `${assetBase}6.jpg?raw=true` },
  { id: 6, img: `${assetBase}1.png?raw=true` },
  { id: 7, img: `${assetBase}2.png?raw=true` },
  { id: 8, img: `${assetBase}3.png?raw=true` },
  { id: 9, img: `${assetBase}4.png?raw=true` },
  { id: 10, img: `${assetBase}5.png?raw=true` },
  { id: 11, img: `${assetBase}7.png?raw=true` },
  { id: 12, img: `${assetBase}10.png?raw=true` },
  { id: 13, img: `${assetBase}11.png?raw=true` },
  { id: 14, img: `${assetBase}12.png?raw=true` },
  { id: 15, img: `${assetBase}13.png?raw=true` },
  { id: 16, img: `${assetBase}14.png?raw=true` },
  { id: 17, img: `${assetBase}15.png?raw=true` },
  { id: 18, img: `${assetBase}16.png?raw=true` },
  { id: 19, img: `${assetBase}17.png?raw=true` },
  { id: 20, img: `${assetBase}18.png?raw=true` },
  { id: 21, img: `${assetBase}19.png?raw=true` },
];

const PropertiesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollTo;
      
      if (direction === 'left') {
        scrollTo = scrollLeft - clientWidth / 2;
        if (scrollTo < -10) { // Wrap to end if at the very beginning
          scrollTo = scrollWidth;
        }
      } else {
        scrollTo = scrollLeft + clientWidth / 2;
        // Check if we have reached the end (with a small tolerance)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollTo = 0;
        }
      }
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const autoAdvance = setInterval(() => {
      scroll('right');
    }, 5000);

    return () => clearInterval(autoAdvance);
  }, []);

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
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-700 shadow-lg"
              aria-label="Next image"
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
                  loading="lazy"
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