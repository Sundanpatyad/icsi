import React from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  ShoppingCart, 
  Award, 
  Globe,
  GraduationCap,
  Brain,
  FileText,
  Building,
  Target,
  Lightbulb,
  Scale,
  Shield,
  Book,
  UserCheck,
  Rocket,
  Monitor
} from 'lucide-react';

const ServiceGrid = () => {
  const services = [
    {
      title: 'Placement',
      description: 'Career opportunities and placement services',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Knowledge Repertoire',
      description: 'Comprehensive knowledge resources',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Calendar of Events',
      description: 'Upcoming events and important dates',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'E-Cart',
      description: 'Online shopping for educational materials',
      icon: ShoppingCart,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'PCS Portal',
      description: 'Professional Competence Scheme portal',
      icon: Award,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Chartered Secretary',
      description: 'Professional certification program',
      icon: FileText,
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'International Perspective',
      description: 'Global insights and perspectives',
      icon: Globe,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Knowledge on Demand',
      description: 'On-demand learning resources',
      icon: Brain,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'EEE : Master Knowledge Series',
      description: 'Expert educational series',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'ICSI-Institute of Social Auditors',
      description: 'Social audit certification',
      icon: UserCheck,
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Specialised and Advanced Courses',
      description: 'Advanced professional courses',
      icon: Target,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-violet-500 to-violet-600'
    },
    {
      title: 'Photo Gallery',
      description: 'Event photos and memories',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'MSME & Startup Catalyst',
      description: 'Supporting startups and SMEs',
      icon: Rocket,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'UDIN',
      description: 'Unique Document Identification Number',
      icon: FileText,
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-slate-500 to-slate-600'
    },
    {
      title: 'ECSIN',
      description: 'Electronic Company Secretary Identification Number',
      icon: Shield,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-rose-500 to-rose-600'
    },
    {
      title: 'ICSI Standards',
      description: 'Professional standards and guidelines',
      icon: Scale,
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Boards',
      description: 'Board management and governance',
      icon: Building,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Student Outreach Initiatives',
      description: 'Programs for student engagement',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Training',
      description: 'Professional training programs',
      icon: Lightbulb,
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'E-learning',
      description: 'Online learning platform',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'e-book on Companies Act, 2013',
      description: 'Digital publication on company law',
      icon: Book,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Discipline',
      description: 'Professional discipline and ethics',
      icon: Scale,
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Guidelines and Concessions for Divyangjan (PwD)',
      description: 'Accessibility support and guidelines',
      icon: Shield,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'ICSI Cares',
      description: 'Social responsibility initiatives',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Prevention of Money Laundering Act, 2002',
      description: 'Compliance and regulatory guidance',
      icon: Shield,
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* News Banner */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-800">
            <span className="font-semibold">Latest Updates:</span>
            <span>Final extension to apply for the ICSI National Awards for Excellence in Corporate Governance, 2025</span>
            <span>•</span>
            <span>Register for ICSI Conference in Sydney, Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;