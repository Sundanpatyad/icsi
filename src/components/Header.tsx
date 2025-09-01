import React, { useState, useEffect } from 'react';
import { Search, Volume2, Menu, X, ChevronDown, Globe, Phone, Mail } from 'lucide-react';
import icsiLogo from '../assets/logo_full.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { label: 'ROI/CCGRT', href: '#' },
    { label: 'STUDY CENTERS', href: '#' },
    { label: 'CHAPTERS', href: '#' },
    { label: 'OVERSEAS PRESENCE', href: '#' }
  ];

  const accessibilityOptions = [
    { label: 'RTI', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'A-', size: 'text-xs' },
    { label: 'A', size: 'text-sm' },
    { label: 'A+', size: 'text-base' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91-11-4534-1000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@icsi.edu</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>A Statutory Body Corporate under an Act of Parliament</span>
              <div className="flex items-center space-x-2">
                <Globe size={14} />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-blue-100'
          : 'bg-white shadow-lg border-b border-gray-200'
        }`}>
        <div className="mx-auto px-40 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Section */}
            <div className="flex items-center">
              {/* Logo Image */}
              <img
                src={icsiLogo}
                alt="ICSI Logo"
                className="w-14 h-14 lg:w-48 lg:h-48 object-contain"
              />

             
            </div>

            {/* Desktop Navigation & Search */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              {/* Quick Links */}
              <nav className="flex space-x-6">
                {quickLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={link.href}
                      className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-all duration-300 py-2 px-1 relative"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                ))}
              </nav>

              {/* Accessibility Options */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
                  <Volume2 size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </button>
                <div className="flex space-x-1">
                  {accessibilityOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1.5 text-xs font-medium border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900 rounded-lg transition-all duration-300 transform hover:scale-105 ${option.size || ''}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Enter your search term"
                  className="w-72 pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                  <Search size={18} />
                </button>
              </div>

              {/* SEC.8 CO. Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                SEC.8 CO.
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}>
          <div className="bg-white border-t border-gray-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Mobile Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600">
                  <Search size={18} />
                </button>
              </div>

              {/* Mobile Quick Links */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Quick Access</h3>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Accessibility Options */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Accessibility</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="p-3 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                    <Volume2 size={18} />
                  </button>
                  {accessibilityOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900 rounded-lg transition-all duration-300 ${option.size || ''}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone size={16} />
                  <span className="text-sm">+91-11-4534-1000</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail size={16} />
                  <span className="text-sm">info@icsi.edu</span>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center mt-4">
                  SEC.8 CO.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;