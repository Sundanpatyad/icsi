import React from 'react';

const ServiceGrid = () => {
  const services = [
    {
      title: 'Placement',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Knowledge Repertoire',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Calendar of Events',
      image: 'https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'E-Cart',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'PCS Portal',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Chartered Secretary',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'International Perspective',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Knowledge on Demand',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'EEE : Master Knowledge Series',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ICSI-Institute of Social Auditors',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Specialised and Advanced Courses',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Photo Gallery',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'MSME & Startup Catalyst',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'UDIN',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ECSIN',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ICSI Standards',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Boards',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Student Outreach Initiatives',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Training',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'E-learning',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services Grid - Exact match to image layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white duration-200 cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full h-32 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Title Container */}
              <div className="p-3 bg-white">
                <h3 className="text-sm font-medium text-gray-800 text-center leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* News Banner - matching the blue banner in image */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="text-center">
            <span className="text-sm text-blue-800 font-medium">
              Latest Updates: Final extension to apply for the ICSI National Awards for Excellence in Corporate Governance, 2025 • Register for ICSI Conference in Sydney, Australia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;