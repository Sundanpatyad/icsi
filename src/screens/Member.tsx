import React from 'react';
import { UserCheck, Shield, Users, Award, FileText, Calendar } from 'lucide-react';

const Member = () => {
  const membershipTypes = [
    {
      title: "Associate Member",
      description: "For newly qualified company secretaries",
      benefits: ["Professional Recognition", "Networking Opportunities", "Continuing Education", "Legal Support"],
      requirements: "CS Final Examination Passed"
    },
    {
      title: "Fellow Member", 
      description: "For experienced company secretaries with 5+ years practice",
      benefits: ["Senior Status", "Mentorship Opportunities", "Board Positions", "Advanced Training"],
      requirements: "5+ Years Practice + Additional Qualifications"
    },
    {
      title: "Student Member",
      description: "For students pursuing CS qualification",
      benefits: ["Study Materials", "Exam Guidance", "Peer Network", "Career Counseling"],
      requirements: "CS Foundation/Executive Registration"
    }
  ];

  const events = [
    { title: "Annual Conference 2024", date: "March 15-17", type: "Conference" },
    { title: "Legal Updates Workshop", date: "April 10", type: "Workshop" },
    { title: "Networking Meet", date: "May 5", type: "Networking" },
    { title: "Professional Development", date: "June 20", type: "Training" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Membership</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our professional community and advance your career as a Company Secretary
          </p>
        </div>

        {/* Membership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {membershipTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{type.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <p className="text-sm text-gray-600">{type.requirements}</p>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Member Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Member Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Professional Recognition</h3>
              <p className="text-sm text-gray-600">Get recognized as a qualified professional</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Networking</h3>
              <p className="text-sm text-gray-600">Connect with industry professionals</p>
            </div>
            <div className="text-center">
              <FileText className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
              <p className="text-sm text-gray-600">Access to exclusive materials and updates</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Events</h3>
              <p className="text-sm text-gray-600">Attend conferences and workshops</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
