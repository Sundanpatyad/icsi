import React, { useState, useEffect } from 'react';
import { Search, Volume2, Menu, X, ChevronDown, Globe, Phone, Mail } from 'lucide-react';
import icsiLogo from '../assets/logo.png';
import VisionBanner from './VisionBanner';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      {/* Top Bar - Hidden on mobile */}
      <div className=" text-white py-2 hidden lg:block" style={{ backgroundColor: "#E14F22" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91-11-4534-1000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@mountainedu.in</span>
              </div>
            </div>
            {/* <div className="flex items-center space-x-4">
              <span>A Statutory Body Corporate under an Act of Parliament</span>
              <div className="flex items-center space-x-2">
                <Globe size={14} />
                <span>English</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#F7F7F7] backdrop-blur-lg shadow-xl border-b border-blue-100'
          : 'bg-[#F7F7F7] shadow-lg border-b border-gray-200'
        }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-40">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">
            
            {/* Logo Section - Responsive sizing */}
            <div className="flex items-center flex-shrink-0">
              <img
                src={icsiLogo}
                alt="ICSI Logo"
                className="h-10 w-auto mix-blend-multiply sm:h-12 md:h-14 lg:h-16 xl:h-20 object-contain"
              />
            </div>

            {/* Desktop Navigation & Search - Hidden on mobile/tablet */}
            <div className="hidden xl:flex items-center space-x-4 2xl:space-x-8 flex-1 justify-end">
              {/* Quick Links */}
              <nav className="flex space-x-3 2xl:space-x-6">
                {quickLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={link.href}
                      className="text-xs 2xl:text-sm font-medium text-gray-700 hover:text-blue-900 transition-all duration-300 py-2 px-1 relative whitespace-nowrap"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                ))}
              </nav>

              {/* Accessibility Options */}
              <div className="flex items-center space-x-2 2xl:space-x-3">
                <button className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 group">
                  <Volume2 size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </button>
                <div className="flex space-x-1">
                  {accessibilityOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`px-2 py-1 2xl:px-3 2xl:py-1.5 text-xs font-medium border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900 rounded-lg transition-all duration-300 transform hover:scale-105 ${option.size || ''}`}
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
                  className="w-48 2xl:w-72 pl-4 pr-12 py-2 2xl:py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                  <Search size={16} />
                </button>
              </div>

              {/* SEC.8 CO. Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 2xl:px-4 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-semibold shadow-lg whitespace-nowrap">
                SEC.8 CO.
              </div>
            </div>

            {/* Tablet Navigation - Shown on tablet, hidden on mobile and desktop */}
            <div className="hidden md:flex xl:hidden items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                <Search size={20} />
              </button>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
                SEC.8 CO.
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu Button - Shown only on mobile */}
            <div className="flex md:hidden items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Responsive dropdown */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}>
          <div className="bg-white border-t border-gray-200 shadow-xl">
            <div className="w-full px-4 sm:px-6 py-4 sm:py-6">
              
              {/* Mobile Search */}
              <div className="relative mb-4 sm:mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-12 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-600">
                  <Search size={16} />
                </button>
              </div>

              {/* Mobile Quick Links */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Quick Access</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Accessibility Options */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">Accessibility</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="p-2.5 sm:p-3 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300">
                    <Volume2 size={16} />
                  </button>
                  {accessibilityOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`px-3 sm:px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900 rounded-lg transition-all duration-300 ${option.size || ''}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info & Badge */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={14} />
                    <span className="text-sm">+91-11-4534-1000</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={14} />
                    <span className="text-sm">info@icsi.edu</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center mt-4">
                  SEC.8 CO.
                </div>
                <div className="text-xs sm:text-sm text-gray-600 text-center pt-2">
                  A Statutory Body Corporate under an Act of Parliament
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <VisionBanner /> */}
    </>
  );
};

export default Header;