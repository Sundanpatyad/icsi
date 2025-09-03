import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const EventCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Ministry of Corporate Affairs Meeting',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'main'
    },
    {
      id: 2,
      title: '53rd National Convention Company Secretaries',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'main'
    },
    {
      id: 3,
      title: 'ICSI 4th International Conference',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'main'
    }
  ];

  const gridItems = [
    {
      id: 1,
      title: '53rd National',
      subtitle: 'Company Secretaries',
      date: '53rd National Convention',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'from-blue-900 to-blue-700'
    },
    {
      id: 2,
      title: 'ICSI 4th International Conference',
      subtitle: 'ICSI 4th International Conference',
      date: '3-5 September 2025',
      location: 'Crowne Plaza • Sydney, Australia',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'from-orange-600 to-red-600'
    },
    {
      id: 3,
      title: '25th ICSI Awards',
      subtitle: 'National Awards For',
      subtitle2: '25th ICSI Awards',
      date: 'Excellence in Corporate Governance, 2025',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 4,
      title: '4th ICSI Board',
      subtitle: 'Mentorship Programme',
      date: '21st September ICSI Board West',
      subtitle2: 'Mentorship Programme',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'from-green-700 to-green-900'
    },
    {
      id: 5,
      title: 'Latest @ ICSI',
      subtitle: 'Latest @ ICSI',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'from-teal-500 to-teal-700'
    },
    {
      id: 6,
      title: 'Academic Portal',
      subtitle: 'Academic Portal',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'from-gray-600 to-gray-800'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Grid - 2x3 Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
              {gridItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 h-46 cursor-pointer transform hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40"></div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-center text-white transition-all duration-300 group-hover:text-yellow-100">
                    <div className="text-center">
                      {index === 0 && (
                        <>
                          <h3 className="text-lg font-bold mb-1 transition-all duration-300">National Convention</h3>
                          <p className="text-sm transition-all duration-300">Company Secretaries</p>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <h3 className="text-lg font-bold mb-1 transition-all duration-300">International Conference</h3>
                          <p className="text-xs mb-1 transition-all duration-300">Crowne Plaza • Sydney, Australia</p>
                          <p className="text-xs transition-all duration-300">3-5 September 2025</p>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <h3 className="text-lg font-bold mb-1 transition-all duration-500">National Awards For</h3>
                          <p className="text-sm mb-1 transition-all duration-500">25th ICSI Awards</p>
                          <p className="text-xs transition-all duration-500">Excellence in Corporate Governance, 2025</p>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <h3 className="text-lg font-bold mb-1 transition-all duration-300">ICSI Board</h3>
                          <p className="text-sm mb-1 transition-all duration-300">Mentorship Programme</p>
                          <p className="text-xs transition-all duration-300">21st September ICSI Board West</p>
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <h3 className="text-lg font-bold transition-all duration-300">Latest @ ICSI</h3>
                        </>
                      )}
                      {index === 5 && (
                        <>
                          <h3 className="text-lg font-bold transition-all duration-300">Academic Portal</h3>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Main Carousel */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 overflow-hidden shadow-2xl group">
              {/* Main Carousel */}
              <div className="relative h-full">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/40"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 backdrop-blur-sm hover:bg-black/50 hover:scale-110 transition-all duration-300 text-white rounded-full opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 backdrop-blur-sm hover:bg-black/50 hover:scale-110 transition-all duration-300 text-white rounded-full opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>

              {/* Play/Pause Controls */}
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-blue-600/80 hover:bg-blue-600 hover:scale-110 transition-all duration-300 text-white rounded shadow-lg"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentSlide
                        ? 'bg-white scale-110 shadow-lg'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
                {/* Red active indicator */}
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text Links */}
        <div className="mt-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 overflow-hidden relative">
          <div className="py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-8 mx-4">
                <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline-offset-4 font-medium underline text-sm transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap">
                  Seminar on Startups, FPO and Agri-Business
                </a>
                <span className="text-blue-400">•</span>
                <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline-offset-4 font-medium underline text-sm transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap">
                  Virtual Mode registration opens for the ICSI 4th International Conference on 3-4 Sept 2025 in Sydney, Australia
                </a>
                <span className="text-blue-400">•</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-8 mx-4">
                <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline-offset-4 font-medium underline text-sm transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap">
                  Seminar on Startups, FPO and Agri-Business
                </a>
                <span className="text-blue-400">•</span>
                <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline-offset-4 font-medium underline text-sm transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap">
                  Virtual Mode registration opens for the ICSI 4th International Conference on 3-4 Sept 2025 in Sydney, Australia
                </a>
                <span className="text-blue-400">•</span>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel