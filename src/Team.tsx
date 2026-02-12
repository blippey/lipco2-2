
import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Mike Hartt Section */}
        <div className="text-center mb-32">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Decades of Trusted Experience</h2>
          <p className="text-lg text-gray-400 mb-12 mx-auto max-w-3xl">
            Since 1947, The Lippey Company has been a pillar in the Southern California commercial real estate market. We specialize in providing expert guidance and personalized service to our clients.
          </p>
          
          <div className="relative w-64 mx-auto mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg transform -rotate-6 transition-transform group-hover:-rotate-3"></div>
            <img 
              src="/assets/IMG_1335.jpg" 
              alt="Mike Hartt, President & CEO" 
              className="relative rounded-lg shadow-2xl w-full h-80 object-cover"
            />
          </div>

          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Our President, Mike Hartt, is a licensed real estate broker with over 40 years of experience. Under his leadership, we have built a reputation for integrity, market knowledge, and achieving exceptional results for our clients.
          </p>
        </div>

        {/* Bill Hunter Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative w-full max-w-xs mx-auto md:mx-0 order-2 md:order-1 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg transform rotate-6 transition-transform group-hover:rotate-3"></div>
            <img 
              src="/assets/Bill.jpg" 
              alt="Bill Hunter, Operations Manager" 
              className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Meet Our Operations Manager</h2>
            <div className="space-y-6 text-gray-400">
              <p className="text-lg">
                Bill Hunter, our Operations Manager, is the primary point of contact for all tenant needs. He takes great care of our tenants and buildings, meticulously overseeing property maintenance to ensure that our facilities operate at peak efficiency.
              </p>
              <p>
                With a focus on proactive support and rapid response, Bill ensures that every business we house can thrive without worrying about facility issues. For any property-related inquiries, don't hesitate to reach out to him directly.
              </p>
              <p className="pt-4">
                <a href="mailto:whunter@lipco.us?cc=blippey@lipco.us" className="text-blue-400 hover:text-blue-300 transition-colors font-bold text-xl block">
                  whunter@lipco.us
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
