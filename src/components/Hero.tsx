import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-900/5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-600/5 rounded-full animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Image Left - Fixed Order */}
          <div className="flex justify-center lg:justify-start hero-image-animate">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional Developer"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl opacity-20 animate-float"></div>
            </div>
          </div>

          {/* Text Right - Fixed Order */}
          <div className="text-center lg:text-left hero-text-animate">
            <div className="overflow-hidden mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight hero-title-slide">
                Web Developer
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <p className="text-xl text-gray-600 leading-relaxed hero-subtitle-slide">
                Adaptable and flexible developer who thrives in dynamic environments, 
                creating reliable and user-friendly digital solutions that make a difference.
              </p>
            </div>
            
            <div className="hero-buttons-animate">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="group px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
                  <Download size={20} className="relative z-10" />
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator-animate">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300 animate-bounce-slow"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;