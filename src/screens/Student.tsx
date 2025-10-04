import React from 'react';
import { GraduationCap, BookOpen, Users, Award, Clock, FileText, Calendar, MessageCircle } from 'lucide-react';

const Student = () => {
  const studentServices = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Comprehensive study materials and resources for all CS levels",
      features: ["Updated Syllabus", "Practice Questions", "Video Lectures", "E-books"]
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Get guidance from experienced professionals and alumni",
      features: ["One-on-One Sessions", "Career Guidance", "Exam Preparation", "Industry Insights"]
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Financial assistance for deserving students",
      features: ["Merit-based Awards", "Need-based Support", "Performance Recognition", "Educational Grants"]
    },
    {
      icon: Clock,
      title: "Exam Support",
      description: "Complete support for examination preparation and registration",
      features: ["Registration Help", "Mock Tests", "Result Guidance", "Re-evaluation Support"]
    }
  ];

  const announcements = [
    { title: "CS Foundation Exam Results Declared", date: "March 1, 2024", type: "Results" },
    { title: "New Study Material Available", date: "February 28, 2024", type: "Study" },
    { title: "Mentorship Program Registration Open", date: "February 25, 2024", type: "Program" },
    { title: "Scholarship Applications Due", date: "February 20, 2024", type: "Scholarship" }
  ];

  const examSchedule = [
    { exam: "CS Foundation", date: "June 15, 2024", status: "Upcoming" },
    { exam: "CS Executive", date: "June 20, 2024", status: "Upcoming" },
    { exam: "CS Professional", date: "June 25, 2024", status: "Upcoming" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Portal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your Company Secretary journey
          </p>
        </div>

        {/* Student Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {studentServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <Icon className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                      <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-sm">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <GraduationCap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">2,500+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">85%</h3>
            <p className="text-gray-600">Pass Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">150+</h3>
            <p className="text-gray-600">Expert Faculty</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BookOpen className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Study Materials</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Announcements */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 text-orange-500 mr-2" />
              Latest Announcements
            </h2>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      {announcement.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{announcement.date}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-orange-500 hover:text-orange-600 font-medium">
              View All Announcements
            </button>
          </div>

          {/* Exam Schedule */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-orange-500 mr-2" />
              Exam Schedule
            </h2>
            <div className="space-y-4">
              {examSchedule.map((exam, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exam.exam}</h3>
                    <p className="text-sm text-gray-600">{exam.date}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    exam.status === 'Upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {exam.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-orange-500 hover:text-orange-600 font-medium">
              View Full Schedule
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our student support team is here to help you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300">
              Contact Support
            </button>
            <button className="border border-orange-500 text-orange-500 py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors duration-300">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
