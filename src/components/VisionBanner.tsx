import visionBanner from "../assets/motto.jpg";

const VisionBanner = () => {
  return (
    <div className="relative w-full h-32 lg:h-52 bg-gradient-to-b from-orange-100 to-green-100 overflow-hidden">
      {/* Main Background Image */}


      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${visionBanner})`
        }}
      ></div>


      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="hexPattern" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,1 52,15 52,37 30,51 8,37 8,15" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Corporate Building Skyline */}
      <div className="absolute bottom-0 left-0 right-0 opacity-25">
        <svg viewBox="0 0 1200 150" className="w-full h-16">
          <polygon points="0,150 80,60 120,80 160,40 200,70 240,30 280,60 320,35 360,75 400,45 440,85 480,55 520,95 560,65 600,105 640,75 680,115 720,85 760,125 800,95 840,135 880,105 920,145 960,115 1000,150 1200,150" fill="rgba(0,0,0,0.3)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 left-8 w-20 h-20 bg-white/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-16 right-16 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-1/3 w-24 h-24 bg-white/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Abstract Geometric Shapes */}
      <div className="absolute top-12 right-1/4 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <polygon points="40,5 70,25 70,55 40,75 10,55 10,25" fill="none" stroke="white" strokeWidth="2" />
          <polygon points="40,15 60,30 60,50 40,65 20,50 20,30" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-12 opacity-15">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="30" cy="30" r="15" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="30" cy="30" r="5" fill="white" />
        </svg>
      </div>

      {/* Dynamic Light Rays */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <defs>
            <radialGradient id="lightRay" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="0" rx="150" ry="100" fill="url(#lightRay)" transform="rotate(15 200 0)" />
          <ellipse cx="300" cy="0" rx="100" ry="80" fill="url(#lightRay)" transform="rotate(-15 300 0)" />
        </svg>
      </div>
    </div>
  );
};

export default VisionBanner;