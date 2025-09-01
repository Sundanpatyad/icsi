import React from 'react';
import { MessageCircle, Twitter, Facebook, Youtube, Linkedin, Instagram, Headset as Threads } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: MessageCircle, color: 'bg-green-500 hover:bg-green-600', name: 'WhatsApp' },
    { icon: Twitter, color: 'bg-black hover:bg-gray-800', name: 'X (Twitter)' },
    { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', name: 'Facebook' },
    { icon: Youtube, color: 'bg-red-500 hover:bg-red-600', name: 'YouTube' },
    { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800', name: 'LinkedIn' },
    { icon: Instagram, color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600', name: 'Instagram' },
    { icon: Threads, color: 'bg-gray-800 hover:bg-gray-900', name: 'Threads' }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <button
            key={index}
            className={`group w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
            title={social.name}
          >
            <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </button>
        );
      })}
    </div>
  );
};

export default SocialSidebar;