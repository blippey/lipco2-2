import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedProperties from './FeaturedProperties';
import Team from './Team';
import Services from './Services';
import PropertiesCarousel from './PropertiesCarousel';
import Contact from './Contact';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <Team />
        <Services />
        <PropertiesCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
