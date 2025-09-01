import React from 'react';
import { Home, User, Users, GraduationCap, Briefcase, Globe, PlayCircle, Building, Phone, FileText, Menu } from 'lucide-react';

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const navItems = [
    { icon: Home, label: 'HOME', active: true },
    { icon: User, label: 'PROFILE' },
    { icon: Users, label: 'MEMBER' },
    { icon: GraduationCap, label: 'STUDENT' },
    { icon: Briefcase, label: 'EMPLOYEE' },
    { icon: Globe, label: 'ONLINE SERVICES' },
    { icon: PlayCircle, label: 'MEDIA CENTRE' },
    { icon: Building, label: 'CAREERS' },
    { icon: Building, label: 'TENDERS' },
    { icon: Phone, label: 'CONTACT US' },
    { icon: FileText, label: 'EXAMINATION' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-xl relative">
      <div className="mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
    

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-2">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap group ${
                    item.active
                      ? 'bg-white text-blue-900 shadow-xl transform scale-105'
                      : 'text-white hover:bg-blue-700/80 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-3">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex items-center space-x-2 text-white hover:bg-blue-700/50 px-4 py-2 rounded-lg transition-all duration-300"
          >
            <Menu size={20} />
            <span className="font-medium">Menu</span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileNavOpen 
            ? 'max-h-screen opacity-100 visible pb-4' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                    item.active
                      ? 'bg-white text-blue-900 shadow-lg'
                      : 'text-white hover:bg-blue-700/50 hover:shadow-md'
                  }`}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;