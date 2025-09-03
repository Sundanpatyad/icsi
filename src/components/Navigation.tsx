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
        <div className="hidden lg:flex  gap-1 items-center justify-between py-2">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap group ${
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
        <div className="lg:hidden py-3 w-full">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex items-center space-x-2 text-white hover:bg-blue-700/50 px-4 py-2 rounded-lg transition-all duration-300"
          >
            <Menu size={20} />
            <span className="font-medium">Menu</span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileNavOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-blue-900 to-blue-800 shadow-2xl z-50">
            <div className="py-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-6 py-4 transition-all duration-200 border-b border-blue-700/30 last:border-b-0 ${
                    item.active
                      ? 'bg-blue-700/50 text-white font-semibold'
                      : 'text-white hover:bg-blue-700/40'
                  }`}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  <span className="text-sm font-medium tracking-wide">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;