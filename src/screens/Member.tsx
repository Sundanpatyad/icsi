import React, { useState } from 'react';
import { ChevronRight, Download, Laptop, Coffee, Users, Search, UserPlus, FileText, CreditCard, GraduationCap, Heart, Briefcase, HelpCircle, BookOpen } from 'lucide-react';

const Member = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const sidebarItems = [
    { id: 'member-search', label: 'Member Search', icon: Search },
    { id: 'new-member', label: 'New Member Admission', icon: UserPlus },
    { id: 'miscellaneous', label: 'Miscellaneous', icon: FileText },
    { id: 'certificate', label: 'Certificate of Practice', icon: FileText },
    { id: 'fee-restoration', label: 'Fee & Restoration', icon: CreditCard },
    { id: 'licentiate', label: 'Licentiate', icon: GraduationCap },
    { id: 'benevolent', label: 'Benevolent Fund', icon: Heart },
    { id: 'placement', label: 'Placement', icon: Briefcase },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'guidelines', label: 'Guidelines', icon: BookOpen }
  ];

  const downloadItems = [
    "Secretarial Audit' Under SEBI Circular Changed to 'Reconciliation of Share Capital Audit'",
    "Sensitisation of Members of the Institute on the Procedure for Implementation of Section 51A"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-50 min-h-screen p-6">
          {/* Placement Services Banner */}
          <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Placement Services</h3>
                <p className="text-sm mt-1">kindly Click Here</p>
              </div>
              <div className="flex space-x-2">
                <Laptop className="h-6 w-6" />
                <Coffee className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Uniform Dress Code Link */}
          <div className="mb-6">
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
            >
              Uniform Dress Code for Members
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              
              return (
                <div key={item.id}>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                    <ChevronRight 
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Expanded content would go here */}
                  {isExpanded && (
                    <div className="ml-7 mt-2 space-y-1">
                      <div className="text-xs text-gray-500 p-2 bg-gray-100 rounded">
                        Sub-menu items would appear here
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Download Section */}
          <div className="mt-8 space-y-4">
            <h4 className="font-semibold text-gray-800 text-sm mb-3">Download</h4>
            {downloadItems.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-2">
                  <Download className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <a 
                    href="#" 
                    className="text-xs text-blue-600 hover:text-blue-800 underline leading-relaxed"
                  >
                    {item}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Hero Image Section */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
              {/* Bokeh effect background */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 blur-sm"></div>
                <div className="absolute top-20 right-32 w-6 h-6 bg-purple-400 rounded-full opacity-50 blur-sm"></div>
                <div className="absolute bottom-20 left-32 w-3 h-3 bg-green-400 rounded-full opacity-70 blur-sm"></div>
                <div className="absolute bottom-32 right-20 w-5 h-5 bg-yellow-400 rounded-full opacity-60 blur-sm"></div>
                <div className="absolute top-32 left-1/2 w-4 h-4 bg-pink-400 rounded-full opacity-50 blur-sm"></div>
                <div className="absolute bottom-16 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-60 blur-sm"></div>
              </div>
            
              {/* Central networking diagram */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Central figure */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                
                {/* Network of connected figures */}
                <div className="relative">
                  {/* Top row */}
                  <div className="flex justify-center space-x-8 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Middle row with central figure */}
                  <div className="flex justify-center space-x-8 mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="h-6 w-6 text-gray-700" />
                    </div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Bottom row */}
                  <div className="flex justify-center space-x-8">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Dotted lines connecting figures */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <pattern id="dotted" patternUnits="userSpaceOnUse" width="4" height="4">
                          <circle cx="2" cy="2" r="1" fill="white" opacity="0.6"/>
                        </pattern>
                      </defs>
                      <line x1="50" y1="50" x2="100" y2="100" stroke="url(#dotted)" strokeWidth="1" opacity="0.6"/>
                      <line x1="150" y1="50" x2="100" y2="100" stroke="url(#dotted)" strokeWidth="1" opacity="0.6"/>
                      <line x1="50" y1="150" x2="100" y2="100" stroke="url(#dotted)" strokeWidth="1" opacity="0.6"/>
                      <line x1="150" y1="150" x2="100" y2="100" stroke="url(#dotted)" strokeWidth="1" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Navigation arrows */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300">
                <ChevronRight className="h-6 w-6 rotate-180" />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Member Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-amber-800 mb-6">Member</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                A member of the Institute means a person whose name is entered in the Register of Members maintained under section 19 of the Act and who has not been removed from the Register of Members under the provisions of the Act and the regulations made thereunder.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                A member of the Institute shall be entitled to practice the profession of Company Secretaries and to offer services in relation to the promotion, forming, incorporation, amalgamation, reconstruction, reorganization or winding up of companies and in relation to the matters incidental thereto and such other services as may be prescribed, including:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>acting as an authorized representative for the purpose of filing any document with the Registrar of Companies or with any other authority;</li>
                <li>acting as a share transfer agent or share and stock broker;</li>
                <li>acting as an issue house;</li>
                <li>acting as a secretarial auditor or consultant;</li>
                <li>acting as an adviser on management;</li>
                <li>acting as an adviser on matters relating to the Capital Issues (Control) Act, 1947, the Industries (Development and Regulation) Act, 1951, the Companies Act, 1956, the Securities Contracts (Regulation) Act, 1956, the Monopolies and Restrictive Trade Practices Act, 1969, and the Foreign Exchange Regulation Act, 1973;</li>
                <li>issuing certificates on behalf of a company;</li>
                <li>holding himself out to the public as a Company Secretary in practice.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;