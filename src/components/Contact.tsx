import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Download, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [headerRef, headerVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "john.developer@email.com",
      link: "mailto:john.developer@email.com",
      description: "For project inquiries and collaboration"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available for calls during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "New York, NY",
      link: null,
      description: "Open to remote opportunities"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://linkedin.com/in/johndeveloper",
      description: "Professional networking"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      username: "@johndeveloper",
      url: "https://github.com/johndeveloper",
      color: "hover:text-black hover:bg-gray-100",
      description: "View all projects and contributions"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      username: "John Developer",
      url: "https://linkedin.com/in/johndeveloper",
      color: "hover:text-blue-600 hover:bg-blue-50",
      description: "Professional network and experience"
    }
  ];

  const subjectOptions = [
    "Job Opportunity",
    "Freelance Project",
    "Collaboration",
    "Technical Consultation",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to create reliable digital solutions for your next project. 
              Let's discuss how I can contribute to your team's success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div 
              ref={leftRef}
              className={`transition-all duration-1000 ease-out delay-200 ${
                leftVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  As an adaptable web developer who thrives in dynamic environments, 
                  I'm always excited to take on new challenges and contribute to innovative projects. 
                  Whether you're looking for a team member or a freelance developer, let's connect!
                </p>

                {/* Contact Info Cards */}
                <div className="grid gap-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index}>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="block p-6 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mt-1">
                              {info.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-black mb-1">
                                {info.title}
                              </h4>
                              <p className="text-gray-700 font-medium mb-1">
                                {info.content}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {info.description}
                              </p>
                            </div>
                            <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>
                        </a>
                      ) : (
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                          <div className="flex items-start space-x-4">
                            <div className="text-blue-600 mt-1">
                              {info.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-black mb-1">
                                {info.title}
                              </h4>
                              <p className="text-gray-700 font-medium mb-1">
                                {info.content}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Resume Download */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white mb-8">
                  <h4 className="text-lg font-semibold mb-2">Download Resume</h4>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get detailed information about my experience, skills, and achievements.
                  </p>
                  <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 font-medium">
                    <Download size={18} />
                    <span>Download Resume (PDF)</span>
                  </button>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    Connect With Me
                  </h4>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center space-x-4 p-4 bg-white rounded-lg ${social.color} transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg border border-gray-100 group`}
                      >
                        <div className="flex-shrink-0">
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-black">{social.name}</div>
                          <div className="text-gray-600 text-sm">{social.username}</div>
                          <div className="text-gray-500 text-xs">{social.description}</div>
                        </div>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-current transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              ref={rightRef}
              className={`transition-all duration-1000 ease-out delay-400 ${
                rightVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tech Company Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject...</option>
                      {subjectOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  I typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;