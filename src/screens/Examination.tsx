import React from 'react';
import { FileText, MapPin, GraduationCap, Users, Award, Search, BookOpen, Trophy, Gift, Heart, Eye, Shield } from 'lucide-react';

const Examination = () => {
  const examinationItems = [
    {
      title: "CSEET",
      label: "CSEET",
      icon: FileText
    },
    {
      title: "EXAMINATION CENTRES",
      label: "Examination Centres",
      icon: MapPin
    },
    {
      title: "CS EXECUTIVE & PROFESSIONAL",
      label: "CS Executive & Professional",
      icon: GraduationCap
    },
    {
      title: "EXAMINERS",
      label: "Examiners",
      icon: Users
    },
    {
      title: "RESULTS",
      label: "Results",
      icon: Award
    },
    {
      title: "VERIFICATION OF MARKS",
      label: "Verification of Marks",
      icon: Search
    },
    {
      title: "PREVIOUS SESSIONS QUESTION PAPERS",
      label: "Previous Sessions QPs",
      icon: BookOpen
    },
    {
      title: "LIST OF RANK HOLDERS",
      label: "List of Rank Holders",
      icon: Trophy
    },
    {
      title: "LIST OF TOPPERS",
      label: "List of Toppers",
      icon: Trophy
    },
    {
      title: "MERIT-CUM-MEANS ASSISTANCE",
      label: "Merit-cum-Means Assistance",
      icon: Gift
    },
    {
      title: "MERIT SCHOLARSHIP",
      label: "Merit Scholarship",
      icon: Gift
    },
    {
      title: "PRIZE AWARDS",
      label: "Prize Awards",
      icon: Award
    },
    {
      title: "Guidelines and Concessions for Divyangjan (PwD)",
      label: "Guidelines and Concessions for Divyangjan (PwD)",
      icon: Heart
    },
    {
      title: "Inspection and/ or Supply of Certified Copy(ies) of Answer Book(s)",
      label: "Supply/Inspection of ABs",
      icon: Eye
    },
    {
      title: "GENERAL OBSERVERS",
      label: "General Observers",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination</h1>
        </div>

        {/* Grid Layout - 3 rows of 5 items each */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {examinationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group cursor-pointer">
                {/* Tile */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 h-32 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="flex flex-col items-center">
                    <Icon className="h-8 w-8 text-blue-700 mb-2" />
                    <h3 className="text-sm font-bold text-blue-900 uppercase leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                {/* Label */}
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-700 underline">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Examination Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Exam Schedule</h3>
                <p className="text-sm text-gray-600">Check upcoming examination dates and timings</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Centers</h3>
                <p className="text-sm text-gray-600">Find examination centers near you</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                <p className="text-sm text-gray-600">View and download your results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examination;
