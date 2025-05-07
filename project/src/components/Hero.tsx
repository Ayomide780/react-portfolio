import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-blue-400 font-medium mb-2 text-lg animate-fadeIn">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slideUp">
              <span className="block"> Ayomide Afolalu</span>
              <span className="block mt-2 text-blue-400"> Web Developer</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 animate-slideUp animation-delay-200">
              I build exceptional and accessible digital experiences for the web.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slideUp animation-delay-300">
              <Button primary>View My Work</Button>
              <Button>Download Resume</Button>
            </div>
            
            <div className="flex gap-5 mt-8 justify-center md:justify-start animate-slideUp animation-delay-400">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-400 overflow-hidden animate-fadeIn animation-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400"></div>
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">JD</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;