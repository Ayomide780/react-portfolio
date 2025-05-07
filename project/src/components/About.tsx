import React from 'react';
import { Code, Briefcase, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate software developer with expertise in creating beautiful and functional web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6 animate-fadeIn">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I'm Ayomide, a web developer with a diploma in Computer Programming 
            from Red Deer College. I specialize in building modern, responsive websites and web 
            applications that deliver seamless user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Since graduating, I’ve worked on various projects using technologies like React, Node.js,
            Express, and Spring Boot. I enjoy bringing ideas to life through clean code, intuitive interfaces,
            and collaborative development. I also have experience designing UI components in Figma and managing 
            databases with MySQL.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you’ll find me learning new tools, refining my design skills, or trying out 
            new recipes in the kitchen.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's work together →
              </a>
            </div>
          </div>

          {/* Right: Key info blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <Code size={36} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building exceptional digital experiences with modern frontend technologies.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <Briefcase size={36} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                5+ years working with modern frameworks and libraries.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <Award size={36} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Crafting clean, maintainable code with attention to detail.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <BookOpen size={36} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Constantly improving and staying updated with new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;