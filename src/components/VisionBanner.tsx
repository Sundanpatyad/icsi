import React from 'react';

const VisionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 py-6 lg:py-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-orange-400/20"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center relative z-10">
          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg lg:text-xl font-bold mb-3 text-green-800 drop-shadow-sm">Vision</h3>
            <p className="text-sm lg:text-base text-green-800 font-medium leading-relaxed">
              "To be a global leader in promoting good corporate governance"
            </p>
          </div>

          {/* Motto */}
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg lg:text-xl font-bold mb-3 text-red-800 drop-shadow-sm">Motto</h3>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-lg lg:text-xl font-bold text-gray-800 drop-shadow-sm">सत्यं वद । धर्मं चर ।</p>
              <p className="text-sm lg:text-base text-red-600 font-semibold italic">speak truth, abide by the law</p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-lg lg:text-xl font-bold mb-3 text-blue-800 drop-shadow-sm">Mission</h3>
            <p className="text-sm lg:text-base text-blue-800 font-medium leading-relaxed">
              "To develop high calibre professionals facilitating good corporate governance"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionBanner;