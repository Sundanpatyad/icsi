import React from 'react';
import { Building, Globe, Shield, Award } from 'lucide-react';

const PartnerLogos = () => {
  const partners = [
    {
      name: 'Ministry of Finance',
      icon: Building,
      description: 'Government of India'
    },
    {
      name: 'IFSCA',
      icon: Globe,
      description: 'International Financial Services Centres Authority'
    },
    {
      name: 'Registered Valuers Organisation',
      icon: Award,
      description: 'Professional Valuation Services'
    },
    {
      name: 'Institute of Professional Excellence',
      icon: Shield,
      description: 'Professional Development'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Partners & Affiliations
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;