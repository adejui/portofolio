import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [additionalRef, additionalVisible] = useScrollAnimation();
  const [philosophyRef, philosophyVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React JS", icon: "⚛️" },
        { name: "TailwindCSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" }
      ]
    },
    {
      title: "Database & Data",
      skills: [
        { name: "Laravel", icon: "🔥" },
        { name: "PHP", icon: "🐘" },
        { name: "MySQL", icon: "🗄️" },
        { name: "API Development", icon: "🔌" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "Figma", icon: "🎯" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, reliable digital solutions 
              across the full development stack.
            </p>
          </div>

          {/* Skills Grid */}
          <div 
            ref={gridRef}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-200 ${
              gridVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group">
                <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 border border-gray-100 group-hover:border-blue-600"
                      >
                        <div className="text-3xl mb-2">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div 
            ref={additionalRef}
            className={`mt-16 transition-all duration-1000 ease-out delay-400 ${
              additionalVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Additional Competencies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Responsive Design", icon: "📱" },
                { name: "RESTful APIs", icon: "🔗" },
                { name: "Database Design", icon: "🏗️" },
                { name: "Version Control", icon: "🔄" },
                { name: "Problem Solving", icon: "🧩" },
                { name: "Code Review", icon: "👀" },
                { name: "Testing", icon: "🧪" },
                { name: "Deployment", icon: "🚀" }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 border border-gray-100"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Philosophy */}
          <div 
            ref={philosophyRef}
            className={`mt-16 text-center transition-all duration-1000 ease-out delay-600 ${
              philosophyVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">My Development Philosophy</h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                "I believe in writing clean, maintainable code that scales. Every line of code 
                should serve a purpose, every component should be reusable, and every solution 
                should be reliable. Technology is just a tool – the real magic happens when 
                we use it to solve meaningful problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;