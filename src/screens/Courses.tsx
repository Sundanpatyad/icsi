import React from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Company Secretary Foundation",
      duration: "6 Months",
      students: "500+",
      description: "Comprehensive foundation course covering company law, corporate governance, and secretarial practices.",
      features: ["Live Classes", "Study Material", "Mock Tests", "Certificate"]
    },
    {
      title: "Executive Program",
      duration: "12 Months", 
      students: "300+",
      description: "Advanced program for working professionals to become qualified company secretaries.",
      features: ["Weekend Classes", "Industry Mentors", "Placement Support", "Professional Network"]
    },
    {
      title: "Professional Program",
      duration: "18 Months",
      students: "200+",
      description: "Complete professional program preparing students for the final CS examination.",
      features: ["Expert Faculty", "Case Studies", "Internship", "Job Guarantee"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Company Secretary programs designed to help you succeed in your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {course.students}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Learn from industry experts and qualified professionals</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600">Study at your own pace with online and offline options</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Career Support</h3>
                <p className="text-gray-600">Get placement assistance and career guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
