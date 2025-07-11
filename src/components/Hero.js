import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import profileImage from '../assets/Profile_Picture.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="arc-reactor right-0 top-1/4"></div>
      <div className="container mx-auto px-4 py-16 z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-iron-red tech-font tracking-wider">SYSTEM ONLINE</p>
              <h1 className="text-5xl md:text-7xl font-bold tech-font mt-2 whitespace-nowrap">ANJOSH J. A.</h1>
              <div className="flex items-center mt-2">
                <div className="h-1 w-16 bg-iron-red"></div>
                <p className="ml-3 text-xl">Content Writer | Cinephile</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed">
              I build narratives, shape tone, and write copy that clicks...
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary px-6 py-3 rounded-md tech-font tracking-wider flex items-center">
                <span>VIEW MY WORK</span>
                <FaArrowRight className="ml-2" />
              </a>
              <a href="https://drive.google.com/file/d/1EAIeiCeiza2HhL1Ga6kp_n7gbhyMNoWz/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 rounded-md tech-font tracking-wider">
                VIEW RESUME
              </a>
              <a href="#contact" className="btn-tertiary px-6 py-3 rounded-md tech-font tracking-wider">
                CONTACT ME
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-iron-red to-iron-gold opacity-20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-4 border-2 border-dashed border-iron-red rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={profileImage} alt="Anjosh J. A." className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-2 border-iron-red z-10" />
                <p className="tech-font text-sm tracking-wider absolute bottom-0 text-center w-full">SYSTEM ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;