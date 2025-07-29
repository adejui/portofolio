import React, { useState } from 'react';
import { Menu, X, Home, User, Code, Award, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', icon: <Home size={18} />, label: 'Home' },
    { id: 'about', icon: <User size={18} />, label: 'About' },
    { id: 'projects', icon: <Code size={18} />, label: 'Projects' },
    { id: 'skills', icon: <Award size={18} />, label: 'Skills' },
    { id: 'certificates', icon: <Award size={18} />, label: 'Certificates' },
    { id: 'contact', icon: <Mail size={18} />, label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-lg border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left font-medium"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;