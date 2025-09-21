import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={Logo} // ← update this path
                alt="ICSI Logo"
                className="w-12 h-12 object-contain mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">
                  PARAMOUNT EDUTECH
                </h3>
               
              </div>
            </div>
            {/* <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A statutory body corporate under an Act of Parliament, promoting
              good corporate governance and developing high calibre
              professionals.
            </p> */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                New Delhi, India
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                +91-11-4534-1000
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About ICSI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Examinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Professional Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Research & Development
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Online Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Digital Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Training Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Career Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-300 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">
                SITE MAP
              </a>
              <a href="#" className="hover:text-white transition-colors">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TERM & CONDITIONS
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CONTACT US
              </a>
            </div>
            <div className="text-sm text-gray-400">
              COPYRIGHT © 2022. PME. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
