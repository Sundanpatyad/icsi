import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const partners = [
    {
      name: 'Ministry of Finance',
      logo: '🏛️',
      subtitle: 'Government of India'
    },
    {
      name: 'IFSCA',
      logo: 'IFSCA',
      subtitle: 'International Financial Services Centres Authority',
      isText: true
    },
    {
      name: 'Registered Valuers Organisation',
      logo: 'ICSI',
      subtitle: 'RVO',
      isText: true
    },
    {
      name: 'Institute of Professional Excellence',
      logo: 'ICSI',
      subtitle: 'Professional Development',
      isText: true
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, partners.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full my-20 py-10 max-w-6xl mx-auto bg-gradient-to-r from-blue-100 to-blue-200 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main carousel container */}
      <div className="relative h-32 flex items-center">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Carousel content */}
        <div className="flex-1 px-16">
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {/* Show 3 items at a time */}
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + partners.length) % partners.length;
              const partner = partners[index];
              const isCenter = offset === 0;
              
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    isCenter 
                      ? 'opacity-100 scale-110 z-10' 
                      : 'opacity-60 scale-90'
                  }`}
                  style={{ 
                    transform: `translateX(${offset * 20}px)`,
                  }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg min-w-[200px] text-center border-2 border-gray-100">
                    {partner.isText ? (
                      <div className="text-2xl font-bold text-blue-800 mb-2">
                        {partner.logo}
                      </div>
                    ) : (
                      <div className="text-4xl mb-2">
                        {partner.logo}
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {partner.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;