import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Calendar, Code, Database, Palette } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [headerRef, headerVisible] = useScrollAnimation();
  const [filterRef, filterVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A complete e-commerce solution built with Laravel backend and React frontend, featuring user authentication, product management, shopping cart, and payment integration.",
      technologies: ["Laravel", "React JS", "MySQL", "TailwindCSS", "Stripe API"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing", "Admin Dashboard"],
      timeline: "3 months",
      status: "Completed",
      links: { live: "#", github: "#" }
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A modern task management application built with React JS and TailwindCSS, featuring drag-and-drop functionality, real-time updates, and responsive design.",
      technologies: ["React JS", "TailwindCSS", "JavaScript", "Local Storage"],
      features: ["Drag & Drop", "Real-time Updates", "Task Categories", "Progress Tracking", "Mobile Responsive"],
      timeline: "1.5 months",
      status: "Completed",
      links: { live: "#", github: "#" }
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "frontend",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A beautiful restaurant website with modern design, online menu, reservation system, and contact forms. Built with HTML, CSS, and JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: ["Online Menu", "Reservation Form", "Gallery", "Contact Integration", "SEO Optimized"],
      timeline: "1 month",
      status: "Completed",
      links: { live: "#", github: "#" }
    },
    {
      id: 4,
      title: "API Management System",
      category: "backend",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "RESTful API built with Laravel for managing user data, authentication, and business logic. Includes comprehensive documentation and testing.",
      technologies: ["Laravel", "PHP", "MySQL", "JWT", "Postman"],
      features: ["JWT Authentication", "CRUD Operations", "API Documentation", "Rate Limiting", "Error Handling"],
      timeline: "2 months",
      status: "Completed",
      links: { live: null, github: "#" }
    },
    {
      id: 5,
      title: "Portfolio Dashboard",
      category: "fullstack",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive dashboard for managing portfolio content, projects, and client communications. Built with Laravel and React.",
      technologies: ["Laravel", "React JS", "MySQL", "TailwindCSS"],
      features: ["Content Management", "Project Showcase", "Client Portal", "Analytics", "File Upload"],
      timeline: "2.5 months",
      status: "In Progress",
      links: { live: "#", github: "#" }
    },
    {
      id: 6,
      title: "Landing Page Collection",
      category: "frontend",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A collection of modern, responsive landing pages for various industries, showcasing different design approaches and conversion optimization techniques.",
      technologies: ["HTML5", "CSS3", "JavaScript", "TailwindCSS"],
      features: ["Responsive Design", "Animation Effects", "Contact Forms", "SEO Optimized", "Fast Loading"],
      timeline: "2 months",
      status: "Completed",
      links: { live: "#", github: "#" }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Eye className="w-4 h-4" /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Code className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Palette className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of reliable digital solutions I've built using modern technologies 
              and best practices in web development.
            </p>
          </div>

          {/* Category Filter */}
          <div 
            ref={filterRef}
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out delay-200 ${
              filterVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-400 ${
              gridVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200"
                        title="View Live"
                      >
                        <ExternalLink size={16} className="text-gray-700" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200"
                        title="View Code"
                      >
                        <Github size={16} className="text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{project.timeline}</span>
                    </div>
                    <span className="text-blue-600 font-medium capitalize">{project.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              <span>View All on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;