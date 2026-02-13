import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-serif text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          Let us put our experience to work for you. Contact us today to discuss your real estate needs.
        </p>
        
        <div className="max-w-lg mx-auto glass-card p-10 md:p-12 rounded-2xl shadow-2xl border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif">The Lippey Company</h3>
          <address className="not-italic text-gray-300 text-lg mb-8 space-y-2">
            <p>9660 Cozycroft Ave</p>
            <p>Chatsworth, CA 91311</p>
          </address>
          
          <div className="space-y-4 mb-10 text-lg font-medium">
            <p>
              <a href="tel:747-202-3500" className="text-blue-400 hover:text-blue-300 transition-colors">747-202-3500</a>
            </p>
            <p>
              <a href="mailto:info@lipco.us" className="text-blue-400 hover:text-blue-300 transition-colors">info@lipco.us</a>
            </p>
          </div>
          
          <a 
            href="mailto:info@lipco.us" 
            className="w-full inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20 active:scale-95"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;