import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certificates = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [featuredRef, featuredVisible] = useScrollAnimation();
  const [allCertsRef, allCertsVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const certificates = [
    {
      id: 1,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "March 2024",
      type: "Course Certificate",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Comprehensive React.js course covering hooks, context, routing, and modern development patterns.",
      skills: ["React JS", "Hooks", "Context API", "React Router"],
      credentialId: "UC-XXXXXXXX",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Laravel Web Development",
      issuer: "Laracasts",
      date: "February 2024",
      type: "Professional Certificate",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced Laravel development including Eloquent ORM, authentication, and API development.",
      skills: ["Laravel", "PHP", "Eloquent ORM", "API Development"],
      credentialId: "LC-XXXXXXXX",
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "January 2024",
      type: "Certification",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Comprehensive JavaScript programming including ES6+, algorithms, and data structures.",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures"],
      credentialId: "FCC-XXXXXXXX",
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "December 2023",
      type: "Certification",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Modern responsive web design techniques using HTML5, CSS3, and Flexbox/Grid.",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
      credentialId: "FCC-XXXXXXXX",
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "Git & GitHub Mastery",
      issuer: "Udemy",
      date: "November 2023",
      type: "Course Certificate",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Complete Git workflow, branching strategies, and collaborative development with GitHub.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      credentialId: "UC-XXXXXXXX",
      link: "#",
      featured: true
    },
    {
      id: 6,
      title: "MySQL Database Administration",
      issuer: "MySQL",
      date: "October 2023",
      type: "Professional Certificate",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Database design, optimization, and administration for web applications.",
      skills: ["MySQL", "Database Design", "Query Optimization", "Administration"],
      credentialId: "MYSQL-XXXXXXXX",
      link: "#",
      featured: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional Certificate': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Course Certificate': return 'bg-green-100 text-green-700 border-green-200';
      case 'Certification': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Certificates & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and professional development through industry-recognized 
              courses and certifications.
            </p>
          </div>

          {/* Featured Certificates */}
          <div 
            ref={featuredRef}
            className={`mb-12 transition-all duration-1000 ease-out delay-200 ${
              featuredVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center justify-center">
              <Star className="w-6 h-6 text-blue-600 mr-2" />
              Featured Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.filter(cert => cert.featured).map((certificate, index) => (
                <div
                  key={certificate.id}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-medium">
                        <Star size={12} />
                        <span>Featured</span>
                      </span>
                    </div>
                    
                    {/* View Link */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={certificate.link}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200"
                        title="View Certificate"
                      >
                        <ExternalLink size={16} className="text-gray-700" />
                      </a>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 bg-white">
                    <h4 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors duration-200 mb-2">
                      {certificate.title}
                    </h4>
                    
                    <p className="text-gray-600 font-medium mb-3">{certificate.issuer}</p>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {certificate.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{certificate.date}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getTypeColor(certificate.type)}`}>
                        {certificate.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Certificates List */}
          <div 
            ref={allCertsRef}
            className={`transition-all duration-1000 ease-out delay-400 ${
              allCertsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              All Certifications
            </h3>
            <div className="grid gap-4">
              {certificates.map((certificate, index) => (
                <div
                  key={certificate.id}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Certificate Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    {/* Certificate Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors duration-200">
                              {certificate.title}
                            </h4>
                            {certificate.featured && (
                              <Star size={16} className="text-blue-600" />
                            )}
                          </div>
                          
                          <p className="text-gray-600 font-medium mb-2">{certificate.issuer}</p>
                          <p className="text-gray-600 text-sm mb-3">{certificate.description}</p>
                          
                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-white text-gray-700 rounded-md text-xs border border-gray-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Certificate Meta */}
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getTypeColor(certificate.type)}`}>
                            {certificate.type}
                          </span>
                          
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Calendar size={14} />
                            <span>{certificate.date}</span>
                          </div>
                          
                          <a
                            href={certificate.link}
                            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                          >
                            <ExternalLink size={14} />
                            <span>View Certificate</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div 
            ref={statsRef}
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ease-out delay-600 ${
              statsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center p-6 bg-blue-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">{certificates.length}</div>
              <div className="text-blue-100 font-medium">Total Certificates</div>
            </div>
            <div className="text-center p-6 bg-black text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">{certificates.filter(c => c.featured).length}</div>
              <div className="text-gray-300 font-medium">Featured</div>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-3xl font-bold mb-2 text-black">2024</div>
              <div className="text-gray-600 font-medium">Latest Year</div>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
              <div className="text-3xl font-bold mb-2 text-black">100%</div>
              <div className="text-gray-600 font-medium">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;